import { useEffect, useState } from "react";

const Department = () => {
  const [department, setDepartment] = useState<any>();
  const fetchDepartment = async () => {
    const res = await fetch("/api/departments");
    if (res.ok) {
      const resp = await res.json();
      setDepartment(resp);
      console.log(resp);
      console.log(department);
    } else {
      console.log("Error occured");
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  return (
    <div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default Department;
