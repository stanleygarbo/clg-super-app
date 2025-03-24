import { proxy } from "valtio";
import { IDepartmentGet, IDepartmentPost } from "../interface/IDepartment";

export const departmentPostData = proxy<IDepartmentPost>({
  departmentName: "",
});

export const departmentGetData = proxy<IDepartmentGet>({
  department_id: "",
  departmentName: "",
});
