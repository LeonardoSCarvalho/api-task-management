export class NotFoundError extends Error {
  constructor(param: string) {
    super(`The ${param} was not found`)
    this.name = "NotFoundError"
  }
}
