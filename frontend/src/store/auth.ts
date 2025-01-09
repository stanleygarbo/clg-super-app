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
