export type GetFirstArgument<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never;

export type ConfigObject = {
  [key: string]: (() => void) | ((data: any) => void);
};

export type Guards<C extends ConfigObject> = {
  [K in keyof C]?: keyof C | (keyof C)[];
};

export type State<C extends ConfigObject> = {
  [K in keyof C]: C[K] extends () => void
    ? { key: K }
    : {
        key: K;
        data: GetFirstArgument<C[K]>;
      };
};

export interface ConstantStateMachineMethods<
  C extends ConfigObject,
  K extends { key: keyof C; data?: unknown }
> {
  get: () => State<C>[K['key']];
  is: <CK extends keyof C>(key: CK) => boolean;
}

export type PickNextFunctionSignature<S, R> = S extends {
  key: string;
  data: infer D;
}
  ? (data: D) => R
  : () => R;

export type StateMachine<
  C extends ConfigObject,
  K extends { key: keyof C; data?: unknown }
> = {
  [Key in keyof C]: PickNextFunctionSignature<
    State<C>[Key],
    StateMachine<C, K> & ConstantStateMachineMethods<C, K>
  >;
};

const toGuardsArray = <C extends ConfigObject, K extends keyof C>(
  guards: Guards<C>,
  key: K
): (keyof C)[] => {
  const guard = guards[key];

  if (guard) {
    return (Array.isArray(guard) ? guard : [guard]) as (keyof C)[];
  }

  return [];
};

export const SM = <
  C extends ConfigObject,
  K extends { key: keyof C; data?: unknown }
>(
  config: C,
  initState: State<C>[K['key']]
) => {
  return (guards: Guards<C> = {}) => {
    let currentState = initState;

    const next = () => {
      const entries = Object.keys(config) as (keyof C)[];
      const enhancedConfig = {} as Record<keyof C, (data?: unknown) => void>;

      entries.forEach((key) => {
        enhancedConfig[key] = (data?: unknown) => {
          const guardsArray = toGuardsArray(guards, key);

          if (guardsArray.includes(currentState.key)) {
            throw new Error(
              `Invalid state change detected, from: ${
                currentState.key
              } to: ${key} but allowed [${guardsArray.join(', ')}]`
            );
          }

          const newState = { key } as State<C>[K['key']];

          if (data !== undefined) {
            (newState as any).data = data;
          }

          currentState = newState;

          return next();
        };
      });

      return {
        ...(enhancedConfig as StateMachine<C, K>),
        get: () => currentState,
        is: <CK extends keyof C>(key: CK) => key === initState.key,
      };
    };

    return next();
  };
};
