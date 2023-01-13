import { userStoreType } from "@/domain/user/dtos"

export interface UserRepository {
  signIn(data: userStoreType): Promise<{ id: string }>
  findByEmail(email: string): Promise<userStoreType | null>
}
