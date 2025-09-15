import { UserType } from "./EnumUserType";

export interface UserSch {
  id?: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  lastAccess: Date;
  typeUser: UserType;
}
