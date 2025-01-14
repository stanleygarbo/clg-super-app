import { proxy } from "valtio";

interface AppState {
  _id: string;
  firstName: string;
  surname: string;
  middleName: string;
  username: string;
  password: string;
  departmentId: string;
  department: string;
  positionId: string;
  position: string;
  hireDate: string;
  employmentType: string;
  roles: string[];
}

export const employeeData = proxy<AppState>({
  _id: "",
  firstName: "",
  surname: "",
  middleName: "",
  username: "",
  password: "",
  departmentId: "",
  department: "",
  positionId: "",
  position: "",
  hireDate: "",
  employmentType: "",
  roles: [],
});
