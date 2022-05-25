/* eslint-disable @typescript-eslint/no-empty-function */
import { SM, Guards } from './sm';

describe('SM()', () => {
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
      const userSM = SM(CONFIG, IDLE)();
      expect(userSM.get()).toEqual(IDLE);
    });
  });

  describe('is()', () => {
    it('returns truthy if current state is equal with given one', () => {
      expect(SM(CONFIG, IDLE)().is('idle')).toBeTruthy();
      expect(SM(CONFIG, IDLE)().is('loaded')).toBeFalsy();
    });
  });

  it('allows to chain state changes for different scenarios', () => {
    expect(SM(CONFIG, IDLE)().loading().loaded(USER).get()).toEqual(LOADED);
    expect(SM(CONFIG, IDLE)().loading().loadFail(LOAD_FAIL.data).get()).toEqual(
      LOAD_FAIL
    );
  });

  it('throws and error when invalid state change detected', () => {
    const GUARDS: Guards<typeof CONFIG> = {
      idle: 'loading',
      loading: ['loaded', 'loadFail'],
      loaded: 'idle',
      loadFail: 'idle',
    };

    expect(() => SM(CONFIG, IDLE)(GUARDS).loaded(USER)).toThrow();
    expect(() =>
      SM(CONFIG, IDLE)(GUARDS).idle().loaded(USER).idle().loading()
    ).toThrow();
    expect(() => SM(CONFIG, IDLE)(GUARDS).loading()).not.toThrow();
    expect(() =>
      SM(CONFIG, IDLE)(GUARDS)
        .loading()
        .loaded(USER)
        .idle()
        .loading()
        .loadFail(LOAD_FAIL.data)
    ).not.toThrow();
  });
});
