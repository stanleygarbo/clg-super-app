import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../../../api/employee";
import Input from "../../props/Input";
// import { useState } from "react";
// import { IEmployeeGet } from "../../../interface/IEmployee";

const ProfileInfo = () => {
  const { id } = useParams();

  // const authSnap = useSnapshot(authState);
  // console.log(authSnap.user.id);

  const query = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById({ id }),
    enabled: !!id,
  });

  // console.log(query.data);

  // TEST ID: 67838a242a0c891e5b2c0de0

  return (
    <div className="">
      <div className="flex flex-col gap-3 pt-3">
        <section className="flex flex-col">
          <div className="gap-3 grid xl:grid-cols-4">
            <Input
              label="Last Name"
              value={query.data?.surname}
              readOnly={true}
            />
            <Input
              label="First Name"
              value={query.data?.firstName}
              readOnly={true}
            />
            <Input
              label="Middle Name"
              value={query.data?.middleName}
              readOnly={true}
            />
            <Input
              label="Username"
              value={query.data?.username}
              readOnly={true}
            />
          </div>
        </section>
        <div className="grid xl:grid-cols-[1fr_1fr_1fr_2fr] gap-5 ">
          <Input
            label="Birthdate"
            value={query.data?.birth?.birthDate.toString().split("T")[0]}
            readOnly={true}
          />
          <Input
            label="Marital Status"
            value={query.data?.maritalStatus}
            readOnly={true}
          />
          <Input label="Phone No." value={query.data?.phone} readOnly={true} />
          <Input label="Email" value={query.data?.email} readOnly={true} />
        </div>
        <section className="grid xl:grid-cols-[1fr_1fr_1fr_2fr] gap-5">
          <Input
            label="Position"
            value={query.data?.position?.jobTitle}
            readOnly={true}
          />
          <Input
            label="Department"
            value={query.data?.department.departmentName}
            readOnly={true}
          />
          <Input
            label="Employment"
            value={query.data?.employmentType}
            readOnly={true}
          />
          <Input
            label="Roles"
            value={query.data?.roles.join(", ")}
            readOnly={true}
          />
        </section>
      </div>
    </div>
  );
};

export default ProfileInfo;
