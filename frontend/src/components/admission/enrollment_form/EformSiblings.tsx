import { useSnapshot } from "valtio";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { studentPostData } from "../../../store/StudentData";

const EformSiblings = () => {
  const snap = useSnapshot(studentPostData);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //   console.log(snap.siblings);

  return <div></div>;
};

export default EformSiblings;
