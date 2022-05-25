import { useState } from 'react';

export interface FnResult {
  message: string;
  invalid: boolean;
}

export type Fn<V> = (value: V) => string;

export type Fns<T extends Record<string, any>> = {
  [K in keyof T]?: Fn<T[K]>[];
};

export type Errors<T extends Record<string, any>> = {
  [K in keyof T]: FnResult;
};

export type Result<T extends Record<string, any>> = {
  errors: Errors<T>;
  invalid: boolean;
  values: T;
  changed: boolean;
  keys: (keyof T)[];
};

export const Vo = <T extends Record<string, any>>(
  values: T,
  fns: Fns<T> = {}
) => {
  const createVo = (values: T, fns: Fns<T>, changed: boolean) => {
    const errors: Partial<Errors<T>> = {};
    let invalid = false;
    const keys = Object.keys(values) as (keyof T)[];

    keys.forEach((prop) => {
      const fnsList = fns[prop]! || [];
      let message = '';
      let fnInvalid = false;

      for (let i = 0; i < fnsList.length; i++) {
        const fn = fnsList[i];
        message = fn(values[prop]);

        if (message) {
          fnInvalid = true;
          break;
        }
      }

      errors[prop] = {
        invalid: fnInvalid,
        message,
      };
      invalid = invalid || fnInvalid;
    });

    const result: Result<T> = {
      errors: errors as Errors<T>,
      invalid,
      values,
      keys,
      changed,
    };

    return {
      set: (key: keyof T, value: T[keyof T]) =>
        createVo({ ...values, [key]: value }, fns, true),
      clone: () => createVo(values, fns, changed),
      end: () => result,
    };
  };

  return createVo(values, fns, false);
};

const toStrResult = (result: boolean, message: string): string =>
  result ? message : '';

const required =
  (message = 'Field is required') =>
  (value: string) =>
    toStrResult(value === '', message);

const minLength =
  (limit: number, message = `Minimum length is ${limit}`) =>
  (value: string) =>
    toStrResult(!!value && value.length < limit, message);

const maxLength =
  (limit: number, message = `Maximum length is ${limit}`) =>
  (value: string) =>
    toStrResult(!!value && value.length > limit, message);

const min =
  (limit: number, message = `Minimum value is ${limit}`) =>
  (value: number) =>
    toStrResult(value < limit, message);

const max =
  (limit: number, message = `Maximum value is ${limit}`) =>
  (value: number) =>
    toStrResult(value > limit, message);

export const useVo = <T extends Record<string, any>>(
  values: T,
  fns?: Fns<T>
) => {
  const [vo, setVo] = useState(Vo(values, fns));

  const onChange = (name: keyof T, value: T[keyof T]) => {
    setVo((prevVo) => prevVo.set(name, value));
  };

  const onSubmit = () => {
    setVo((prevVo) => prevVo.clone());
  };

  return {
    result: vo.end(),
    onChange,
    onSubmit,
  };
};

export { required, minLength, maxLength, min, max };
