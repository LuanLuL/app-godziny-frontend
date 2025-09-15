//import axios from "axios";
import { useMemo } from "react";
import { UserType } from "../../../modules/user/config/EnumUserType";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API,
// });

export const useAuthServerApi = () =>
  useMemo(
    () => ({
      validadeToken: async (token: string) => {
        return {
          user: {
            id: 1,
            name: "João da Silva",
            email: "joao.silva@email.com",
            password: "senhaSegura123",
            createdAt: new Date("2024-01-10T10:00:00Z"),
            lastAccess: new Date("2025-06-29T15:00:00Z"),
            typeUser: UserType.ADMINISTRATOR,
          },
        };
      },
      login: async (email: string, password: string) => {
        return {
          user: {
            id: 1,
            name: "João da Silva",
            email: "joao.silva@email.com",
            password: "senhaSegura123",
            createdAt: new Date("2024-01-10T10:00:00Z"),
            lastAccess: new Date("2025-06-29T15:00:00Z"),
            typeUser: UserType.ADMINISTRATOR,
          },
          token: "123456789",
        };
      },
      logout: async () => {
        return { status: true };
      },
    }),
    []
  );
