import apiClient from "./apiClient";
import { IEmployeeGet, IEmployeePost } from "../interface/IEmployee";

export const getEmployeeById = async ({
  id,
}: {
  id?: string;
}): Promise<IEmployeeGet> => {
  const response = await apiClient.get<IEmployeeGet>(`/employees/${id}`);
  return response.data;
};

// type Employees = (Omit<IEmployeeGet, "department"> & Omit<IEmployeeGet, "position"> & {position: {jobTitle:string; hourlyWage:number}, department:{departmentName:string}})[]

// export const getEmployees = async (): Promise<{results:Employees}> => {
//   const response = await apiClient.get<{results:Employees}>(`/employees`);
//   // console.log(response)
//   return response.data;
// };

export const getEmployees = async (): Promise<IEmployeeGet> => {
  const response = await apiClient.get("/employees");
  return response.data.results;
};

export const getEmployeees = async () => {
  const response = await apiClient.get("/employees");
  return response.data.results;
};

export const addEmployee = async (data: IEmployeePost) => {
  const response = await apiClient.post("/employees", data);
  return response.data;
};

export const updateEmployee = async ({
  value,
  id,
}: {
  value: IEmployeePost;
  id: string;
}) => {
  try {
    await apiClient.patch(`/employees/${id}`, value);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
