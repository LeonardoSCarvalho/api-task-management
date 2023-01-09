import { InvalidParamError } from "@/domain/errors"
import { userType } from "@/domain/user/dtos"
import { User } from "@/domain/user/entities/user"

const makeSut = () => {
  const memoryPayload: userType = {
    name: "any_name",
    email: "any@email.com",
    password: "any_password",
  }
  const sut = User
  return { sut, memoryPayload }
}

describe("User", () => {
  it("Should return Invalid param email if User not receive correct email", () => {
    const { sut, memoryPayload } = makeSut()
    memoryPayload.email = "invalid_email"
    const user = sut.isValidEmail(memoryPayload.email)
    expect(user.isLeft()).toBe(true)
    expect(user.value).toEqual(new InvalidParamError("email"))
  })
})
