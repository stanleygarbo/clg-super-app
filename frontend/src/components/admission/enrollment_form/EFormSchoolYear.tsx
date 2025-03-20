import { useSnapshot } from "valtio";
import apiClient from "../../../api/apiClient";
import { useEffect, useState } from "react";
import { IProgram } from "../../../store/ProgramData";
import { studentPostData } from "../../../store/StudentData";

const EFormSchoolYear = () => {
  const snap = useSnapshot(studentPostData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [programs, setPrograms] = useState<IProgram[]>([]);

  // FETCH PROGRAMS
  const fetchPrograms = async () => {
    try {
      const response = await apiClient.get("/programs");
      setPrograms(response.data.results);
    } catch {
    } finally {
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return <div className="p-10 flex justify-between"></div>;
};

export default EFormSchoolYear;
