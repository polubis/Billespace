let API = '';

export const prepare = (api: string) => {
  API = api;
};

export const pathFactory =
  (...parts: string[]) =>
  (): string =>
    `${API}/${parts.join('/')}`;
