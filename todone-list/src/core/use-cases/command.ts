import { UseCase } from './use-case'

export abstract class Command<Param, Result> extends UseCase<Param, Result> {
  readonly = false
}
