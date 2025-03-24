import { proxy } from "valtio";
import { IEmployeeGet, IEmployeePost } from "../interface/IEmployee";

export const employeePostData = proxy<IEmployeePost>({
  firstName: "",
  surname: "",
  middleName: "",
  birthDate: "",
  username: "",
  password: "",
  department: "",
  position: "",
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
});
