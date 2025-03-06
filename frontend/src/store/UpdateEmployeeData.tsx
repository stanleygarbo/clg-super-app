import { proxy } from "valtio";

interface AppState {
  _id: string;
  firstName: string;
  surname: string;
  middleName: string;
  username: string;
  password: string;
  department: string;
  position: string;
  hireDate: string;
  employmentType: string;
  roles: string[];
}

export const updateEmployeeData = proxy<AppState>({
  _id: "",
  firstName: "",
  surname: "",
  middleName: "",
  username: "",
  password: "",
  department: "",
  position: "",
  hireDate: "",
  employmentType: "",
  roles: [],
});
