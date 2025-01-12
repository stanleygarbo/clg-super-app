import { proxy } from "valtio";

interface AppState {
  departmentName: string;
}

export const departmentData = proxy<AppState>({
  departmentName: "",
});
