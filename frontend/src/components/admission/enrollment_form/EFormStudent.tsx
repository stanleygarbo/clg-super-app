import { useSnapshot } from "valtio";
import { useState } from "react";
import { studentPostData } from "../../../store/StudentData";

const EFormStudent = () => {
  const snap = useSnapshot(studentPostData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <div></div>;
};

export default EFormStudent;
