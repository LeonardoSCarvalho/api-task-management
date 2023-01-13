import { InternalServerError } from "@/domain/errors"
import { ISignInUserUseCase } from "@/domain/user/use-cases/sign-in-user-usercase"
import { Controller, ControllerInput, ControllerOutput } from "../protocols"

export class SignInUserController implements Controller {
  constructor(private readonly signInUserUseCase: ISignInUserUseCase) {}
  async execute({
    request,
    response,
  }: ControllerInput): Promise<ControllerOutput> {
    try {
      const payload = request.body
      if (!payload) {
        return response.status(204).json({
          message: "Payload is empt",
        })
      }
      const result = await this.signInUserUseCase.perform(payload)
      if (result.isLeft()) {
        return response.status(400).json({
          message: result.value.message,
        })
      }
      return response.status(200).json(result.value)
    } catch (err) {
      const serverError = new InternalServerError()
      return response.status(500).json({ message: serverError.message })
    }
  }
}
