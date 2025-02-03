interface Employee {
  _id: string;
  firstName: string;
  surname: string;
  middleName: string;
  username: string;
  password: string;
  employmentType: string;
  hireDate: string;
  roles: string[];
}

export interface IEmployee extends Employee {
  position: {
    jobTitle: string;
    _id: string;
  };
  department: {
    departmentName: string;
  };
}

export interface IEmployeeForm extends Employee {
  position: string;
  department: string;
}
