import { proxy } from "valtio";

interface AppState {
  usn: string;
  name: string;
  role: string;
  createdAt: string;
  open: boolean;
}

export const userData = proxy<AppState>({
  usn: "",
  name: "",
  role: "",
  createdAt: "",
  open: true,
});
