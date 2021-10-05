// Chain of responsibility

export abstract class UseCase<Param, Result> {
  abstract readonly: boolean

  async execute(param: Param): Promise<Result> {
    return this.internalExecute(param)
    // console.log(param)
    // spinner = true
    //
    // if (notAuth) {
    //   return
    // }
    //
    // if (error) {
    //   alert(error)
    // }
    //
    // if (isCached(result)) {
    //   spinner = false
    //   return cache
    // } else {
    //   const result = await this.internalExecute(param)
    //   spinner = false
    //   return result
    // }
  }

  abstract internalExecute(param: Param): Promise<Result>
}
