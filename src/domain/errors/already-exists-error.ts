export class AlreadyExistsError extends Error {
  constructor(param: string) {
    super(`The ${param} already exists`)
    this.name = "AlreadyExistsError"
  }
}
