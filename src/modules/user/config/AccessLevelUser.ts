import { UserType } from "./EnumUserType";

export const ACCESS_LEVELS_USER = {
  [UserType.NORMAL]: 0,
  [UserType.MODERATOR]: 1,
  [UserType.ADMINISTRATOR]: 2,
};
