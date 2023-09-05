export interface Database {
  create(key: string, value: unknown): void;
  read(key: string): unknown;
  update(key: string, value: unknown): void;
  delete(key: string): void;
}
