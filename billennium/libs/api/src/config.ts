let API = '';

export const prepare = (api: string) => {
  API = api;
};

export const URLFactory =
  (...parts: string[]) =>
  (): string =>
    `${API}/${parts.join('/')}`;
