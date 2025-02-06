import { proxy } from "valtio";
import { IEmployee, IEmployeeFetch } from "../interface/IEmployee";

export const employeeData = proxy<IEmployee>({
  _id: "",
  firstName: "",
  surname: "",
  middleName: "",
  username: "",
  password: "",
  department: {
    department_id: "",
    departmentName: "",
  },
  position: {},
  hireDate: "",
  employmentType: "",
  roles: [],
});
