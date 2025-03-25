import { proxy } from "valtio";
import { IEmployeeGet, IEmployeePost } from "../interface/IEmployee";

<<<<<<< HEAD
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
=======
export const employeePostData = proxy<IEmployeePost>({
>>>>>>> 810c4096926684268a5e4adf8163a3b58ef04638
  firstName: "",
  surname: "",
  middleName: "",
  birthDate: "",
  username: "",
  password: "",
  department: "",
  position: "",
<<<<<<< HEAD
  department: "",
  dateHired: "",
  userName: "",
  password: "",
  sssNum: "",
  philhealthNum: "",
  pagibigID: "",
  tinNum: "",
=======
  hireDate: "",
  employmentType: "",
  roles: [],
  address: { houseNum: "", streetBrgy: "", city: "", district: "" },
  gender: "",
});

export const employeeGetData = proxy<IEmployeeGet>({
  _id: "",
  firstName: "",
  surname: "",
  middleName: "",
  username: "",
  password: "",
  department: { _id: "", departmentName: "" },
  position: { _id: "", jobTitle: "", hourlyWage: 0 },
  hireDate: "",
  employmentType: "",
  roles: [],
  address: { houseNum: "", streetBrgy: "", city: "", district: "" },
  gender: "",
>>>>>>> 810c4096926684268a5e4adf8163a3b58ef04638
});
