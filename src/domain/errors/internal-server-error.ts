export class INternalServerError extends Error {
  constructor() {
    super("Internal Server Error")
    this.name = "InternalServerError"
  }
}
