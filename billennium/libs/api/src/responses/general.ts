export interface Response<T, C extends number> {
  data: T | null;
  errors: string[];
  code: C | 500;
}
