import { UserRepository } from "@/app/repositories/user-repository"
import { AlreadyExistsError } from "@/domain/errors"
import { User } from "@/domain/user/entities/user"
import {
  ISignInUserUseCase,
  SignInUserUseCaseInput,
  SignInUserUseCaseOutput,
} from "@/domain/user/use-cases/sign-in-user-usercase"
import { left, right } from "@/shared/either"

export class SignInUserUseCase implements ISignInUserUseCase {
  private readonly userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }
  async perform(
    input: SignInUserUseCaseInput
  ): Promise<SignInUserUseCaseOutput> {
    const building = User.build(input)
    if (building.isLeft()) return left(building.value)
    const user = building.value
    const userExists = await this.userRepository.findByEmail(user.email)
    if (userExists) return left(new AlreadyExistsError("email"))
    const userStore = await this.userRepository.signIn(user)
    return right(userStore)
  }
}
