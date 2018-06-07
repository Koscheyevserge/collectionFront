import { User } from "./user.entity";
import { Lookup } from "./lookup.entity";

export class Department extends Lookup {
  public users: User[];
}
