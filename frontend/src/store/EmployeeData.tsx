import { proxy } from "valtio";

interface AppState {
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  office: string;
  sssNum: string;
  philhealthNum: string;
  pagibigID: string;
  tinNum: string;
}

export const employeeData = proxy<AppState>({
  firstName: "",
  middleName: "",
  lastName: "",
  position: "",
  office: "",
  sssNum: "",
  philhealthNum: "",
  pagibigID: "",
  tinNum: "",
});
