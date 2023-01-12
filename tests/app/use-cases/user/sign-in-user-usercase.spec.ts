import { SignInUserUseCase } from "@/app/use-cases/user/sign-in-user-usecase"
import { InMemoryUserRepository } from "@/infra/repositories/in-memory-repositories/in-memory-user-repository"

const makeSut = () => {
  const userRepository = new InMemoryUserRepository()
  const sut = new SignInUserUseCase(userRepository)
  return {
    sut,
  }
}

describe("SignInUserUseCase", () => {
  it("test", async () => {
    const { sut } = makeSut()
    const user = {
      name: "any_name",
      email: "any_email@email.com",
      password: "any_password",
    }
    const response = await sut.perform(user)
    expect(response.value).toHaveProperty("id")
    expect(response.isRight).toBeTruthy()
  })
})
