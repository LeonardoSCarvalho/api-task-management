import { SignInUserUseCase } from "@/app/use-cases/user/sign-in-user-usecase"
import { SignInUserController } from "@/infra/controllers/user/sign-in-user-controller"
import { InMemoryUserRepository } from "@/infra/repositories/in-memory-repositories/in-memory-user-repository"
import { Request, Response } from "express"

export const makeSignUserFactory = async function (
  request: Request,
  response: Response
) {
  const userReposiotry = new InMemoryUserRepository()
  const signInUserUseCase = new SignInUserUseCase(userReposiotry)
  const signInUserController = new SignInUserController(signInUserUseCase)
  return signInUserController.execute({ request, response })
}
