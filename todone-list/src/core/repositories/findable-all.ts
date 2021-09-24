export interface FindableAll<Result> {
  findAll(): Promise<Result[]>
}
