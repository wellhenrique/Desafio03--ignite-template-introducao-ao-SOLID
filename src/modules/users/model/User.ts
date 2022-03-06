import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  email: string;
  admin: boolean;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      console.log(this.id);
    }
  }
}

export { User };
