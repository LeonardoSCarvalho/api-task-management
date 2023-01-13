import { SignInUserUseCase } from "@/app/use-cases/user/sign-in-user-usecase"
import { AlreadyExistsError } from "@/domain/errors"
import { InMemoryUserRepository } from "@/infra/repositories/in-memory-repositories/in-memory-user-repository"

const makeSut = () => {
  const userRepository = new InMemoryUserRepository()
  const sut = new SignInUserUseCase(userRepository)
  return {
    sut,
    userRepository,
  }
}

describe("SignInUserUseCase", () => {
  it("Should return the id if no error occurs", async () => {
    const { sut, userRepository } = makeSut()
    const user = {
      name: "any_name",
      email: "any_email@email.com",
      password: "any_password",
    }
    const response = await sut.perform(user)
    expect(userRepository.signInCalls).toBe(1)
    expect(userRepository.findByEmailCalls).toBe(1)
    expect(response.value).toHaveProperty("id")
    expect(response.isRight).toBeTruthy()
  })
  it("Should return an error if the email is already in use", async () => {
    const { sut, userRepository } = makeSut()
    const user = {
      name: "any_name",
      email: "any_email@email.com",
      password: "any_password",
    }
    await sut.perform(user)
    const response = await sut.perform(user)
    expect(userRepository.signInCalls).toBe(1)
    expect(userRepository.findByEmailCalls).toBe(2)
    expect(response.isLeft).toBeTruthy()
    expect(response.value).toEqual(new AlreadyExistsError("email"))
  })
})
