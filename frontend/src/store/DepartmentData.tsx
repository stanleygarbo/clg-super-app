import { proxy } from "valtio";
import { IDepartment } from "../interface/IDepartment";

export const departmentData = proxy<IDepartment>({
  departmentName: "",
});
