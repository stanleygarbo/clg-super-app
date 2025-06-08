import { proxy, subscribe } from "valtio";
import { IUser } from "../interface/IUser";

const authOnLS = localStorage.getItem("auth");

export const authState = proxy<{
  token: string;
  user: IUser;
}>(
  authOnLS
    ? JSON.parse(authOnLS)
    : {
        token: "",
        user: {},
      }
);

subscribe(authState, () => {
  localStorage.setItem("auth", JSON.stringify(authState));
});

// in store/auth.ts
export const resetAuthState = () => {
  authState.token = "";
  authState.user = { username: "", id: "", iat: 0, role: [], exp: 0 };
  localStorage.removeItem("auth");
};

export const sidebarState = proxy({
  isOpen: true,
});
