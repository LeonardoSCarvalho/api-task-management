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
  it("Should return Invalid param name if User not receive correct email", () => {
    const { sut, memoryPayload } = makeSut()
    memoryPayload.name = "i"
    const user = sut.isValidName(memoryPayload.name)
    expect(user.isLeft()).toBe(true)
    expect(user.value).toEqual(new InvalidParamError("name"))
  })
  it("Should return Invalid param password if User not receive correct email", () => {
    const { sut, memoryPayload } = makeSut()
    memoryPayload.password = "i"
    const user = sut.isValidPassword(memoryPayload.password)
    expect(user.isLeft()).toBe(true)
    expect(user.value).toEqual(new InvalidParamError("password"))
  })
  it("Should return a valid user if User receive correct params", () => {
    const { sut, memoryPayload } = makeSut()
    const user = sut.build(memoryPayload)
    expect(user.isRight()).toBe(true)
    expect(user.value).toHaveProperty("id")
    expect(user.value).toHaveProperty("createdAt")
  })
})
