import { useState } from "react";
import { employeePostData } from "../../../store/EmployeeData";

type RoleSelectProps = {
  roles: string[];
};

const RoleSelect: React.FC<RoleSelectProps> = ({ roles }) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  // if (selectedRoles.length == 0) {
  //   setSelectedRoles(employeePostData.roles);
  // } else {
  //   employeePostData.roles = selectedRoles;
  // }

  const handleSelect = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((item) => item !== role)
        : [...prev, role]
    );
  };

  return (
    <div className="relative">
      <div
        className="text-center outline-none border-0 border-b-black p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200 overflow-scroll no-scrollbar h-[41.2px]"
        onClick={toggleDropdown}
      >
        {selectedRoles.length > 0
          ? selectedRoles.join(", ")
          : "Select Roles --->"}
      </div>
      {isOpen && (
        <div className="absolute w-full mt-2 h-40 overflow-scroll no-scrollbar bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {roles.map((role) => (
            <div
              key={role}
              className={`p-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                selectedRoles.includes(role) ? "bg-gray-200" : ""
              }`}
              onClick={() => handleSelect(role)}
            >
              <input
                type="checkbox"
                checked={selectedRoles.includes(role)}
                readOnly
                className="mr-2"
              />
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleSelect;
