import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findById = this.usersRepository.findById(user_id);

    if (!findById) {
      throw new Error(`User not exists`);
    }

    const admin = this.usersRepository.turnAdmin(findById);

    return admin;
  }
}

export { TurnUserAdminUseCase };
