import {
  AlreadyExistsError,
  InternalServerError,
  InvalidParamError,
} from "@/domain/errors"
import { Either } from "@/shared/either"
import { userType } from "../dtos"

export interface ISignInUserUseCase {
  perform: (user: SignInUserUseCaseInput) => SignInUserUseCaseOutput
}
type SignInUserUseCaseFailled =
  | InvalidParamError
  | InternalServerError
  | AlreadyExistsError

export type SignInUserUseCaseInput = userType
export type SignInUserUseCaseOutput = Promise<
  Either<SignInUserUseCaseFailled, { id: string }>
>
