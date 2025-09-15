import { createContext } from "react";
import { UserSch } from "../../../modules/user/config/UserSch";
import { UserType } from "../../../modules/user/config/EnumUserType";

interface IUseAuthContext {
  user: UserSch | null;
  isLogged: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  getToken: () => string | null;
  setToken: (token: string) => void;
  hasPermission: (requiredLevel: UserType) => boolean;
}

const UseAuthContext = createContext<IUseAuthContext>({} as IUseAuthContext);

export default UseAuthContext;

export type { IUseAuthContext };
