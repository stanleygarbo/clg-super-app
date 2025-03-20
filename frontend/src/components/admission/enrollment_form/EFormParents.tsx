import { useSnapshot } from "valtio";
import { useState } from "react";
import { studentPostData } from "../../../store/StudentData";

const EFormParents = () => {
  const snap = useSnapshot(studentPostData);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <div></div>;
};

export default EFormParents;
