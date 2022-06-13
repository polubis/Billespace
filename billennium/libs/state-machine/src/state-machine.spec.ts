/* eslint-disable @typescript-eslint/no-empty-function */
import { StateMachine, Guards } from './state-machine';

describe('StateMachine()', () => {
  type User = { id: number; username: string };

  const USER: User = { id: 0, username: 'Piotr' };
  const IDLE = { key: 'idle' } as const;
  const LOADED = { key: 'loaded', data: USER } as const;
  const LOAD_FAIL = { key: 'loadFail', data: 'Error' } as const;

  const CONFIG = {
    idle: () => {},
    loading: () => {},
    loaded: (data: User) => data,
    loadFail: (error: string) => error,
  };

  describe('get()', () => {
    it('returns current state', () => {
      const userSM = StateMachine(CONFIG, IDLE)();
      expect(userSM.get()).toEqual(IDLE);
    });
  });

  describe('is()', () => {
    it('returns truthy if current state is equal with given one', () => {
      expect(StateMachine(CONFIG, IDLE)().is('idle')).toBeTruthy();
      expect(StateMachine(CONFIG, IDLE)().is('loaded')).toBeFalsy();
    });
  });

  it('allows to chain state changes for different scenarios', () => {
    expect(StateMachine(CONFIG, IDLE)().loading().loaded(USER).get()).toEqual(
      LOADED
    );
    expect(
      StateMachine(CONFIG, IDLE)().loading().loadFail(LOAD_FAIL.data).get()
    ).toEqual(LOAD_FAIL);
  });

  it('throws and error when invalid state change detected', () => {
    const GUARDS: Guards<typeof CONFIG> = {
      idle: 'loading',
      loading: ['loaded', 'loadFail'],
      loaded: 'idle',
      loadFail: 'idle',
    };

    expect(() => StateMachine(CONFIG, IDLE)(GUARDS).loaded(USER)).toThrow();
    expect(() =>
      StateMachine(CONFIG, IDLE)(GUARDS).idle().loaded(USER).idle().loading()
    ).toThrow();
    expect(() => StateMachine(CONFIG, IDLE)(GUARDS).loading()).not.toThrow();
    expect(() =>
      StateMachine(CONFIG, IDLE)(GUARDS)
        .loading()
        .loaded(USER)
        .idle()
        .loading()
        .loadFail(LOAD_FAIL.data)
    ).not.toThrow();
  });
});
