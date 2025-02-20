import apiClient from "./apiClient";
import { IEmployeeGet, IEmployeePost } from "../interface/IEmployee";


export const getEmployeeById = async ({
  id,
}: {
    id?: string
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

export const getEmployees = async () => {
  const response = await apiClient.get('/employees');
  // console.log("Data :: ",response.data.results)
  return response.data.results
}

export const addEmployee = async (value: IEmployeePost) => {
  await apiClient.post('/employees', value)
}

export const updateEmployee = async (value: IEmployeeGet) => {
  try {
    const response = await apiClient.patch(`/employees/${value._id}`, value);
    return response.data; // Ensure we return the updated data
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Rethrow the error to let `onError` handle it in `useMutation`
  }
};
