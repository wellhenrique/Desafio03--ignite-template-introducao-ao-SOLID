import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const createUser = new User();

    Object.assign(createUser, {
      name,
      email,
      admin: false,
    });

    this.users.push(createUser);

    return createUser;
  }

  findById(id: string): User | undefined {
    const findById = this.users.find((user) => user.id === id);

    return findById;
  }

  findByEmail(email: string): User | undefined {
    const findByEmail = this.users.find((user) => user.email === email);

    return findByEmail;
  }

  turnAdmin(receivedUser: User): User {
    const userSelected = this.users.find((user) => user === receivedUser);

    userSelected.admin = true;

    return userSelected;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
