import { UserRepository } from "@/app/repositories/user-repository"
import { userStoreType } from "@/domain/user/dtos"

export class InMemoryUserRepository implements UserRepository {
  private readonly users: userStoreType[] = []
  public signInCalls = 0
  async signIn(data: userStoreType): Promise<{ id: string }> {
    this.signInCalls++
    this.users.push(data)
    return { id: this.users.at(-1)?.id || "" }
  }
}
