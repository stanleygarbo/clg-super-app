import { proxy } from "valtio";

interface AppState {
  usn: string;
  password: string;
  confirmPass: string;
  name: string;
  role: string;
  createdAt: string;
}

export const userData = proxy<AppState>({
  usn: "",
  password: "",
  confirmPass: "",
  name: "",
  role: "",
  createdAt: "",
});
