import { UseCase } from './use-case'

export abstract class Query<Param, Result> extends UseCase<Param, Result> {
  readonly = true
}
