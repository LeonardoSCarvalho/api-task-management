import { InvalidParamError } from "@/domain/errors"
import { Either, left, right } from "@/shared/either"
import { isValidEmail } from "@/shared/validators"
import { randomUUID } from "crypto"
import { userStoreType } from "../dtos"

export class User {
  public user: userStoreType
  private constructor(user: userStoreType) {
    this.user = {
      ...user,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  }
  public static isValidEmail(email: string): Either<InvalidParamError, string> {
    return isValidEmail(email)
      ? right(email)
      : left(new InvalidParamError("email"))
  }
}
