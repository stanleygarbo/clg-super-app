import { proxy } from "valtio";

interface AppState {
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  department: string;
  dateHired: string;
  userName: string;
  password: string;
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
  department: "",
  dateHired: "",
  userName: "",
  password: "",
  sssNum: "",
  philhealthNum: "",
  pagibigID: "",
  tinNum: "",
});
