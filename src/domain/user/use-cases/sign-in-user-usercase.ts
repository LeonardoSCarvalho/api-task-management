import {
  AlreadyExistsError,
  INternalServerError,
  InvalidParamError,
} from "@/domain/errors"
import { Either } from "@/shared/either"
import { userType } from "../dtos"

export interface ISignInUserUseCase {
  perform: (user: SignInUserUseCaseInput) => Promise<SignInUserUseCaseOutput>
}
type SignInUserUseCaseFailled =
  | InvalidParamError
  | INternalServerError
  | AlreadyExistsError

export type SignInUserUseCaseInput = userType
export type SignInUserUseCaseOutput = Promise<
  Either<SignInUserUseCaseFailled, { id: string }>
>