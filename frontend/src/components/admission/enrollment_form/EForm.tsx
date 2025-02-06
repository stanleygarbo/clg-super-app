import EFormSchoolYear from "./EFormSchoolYear";
import EFormStudent from "./EFormStudent";
import EFormParents from "./EFormParents";
import EformSiblings from "./EformSiblings";
import { useNavigate } from "react-router-dom";
import { studentData } from "../../../store/StudentData";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { useSnapshot } from "valtio";
import { useEffect, useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";

type deptData = {
  departmentName: string;
  _id: string;
};

function EForm() {
  const snapStudent = useSnapshot(studentData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  // const [departments, setDepartments] = useState<deptData[]>();

  // const getDepartment = async () => {
  //   const response = await apiClient.get("/departments");
  //   setDepartments(response.data.results);
  //   // console.log("data :: ", departments);
  // };

  // let id: string;
  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   const datas = { studentData };
  //   studentData.status = "Enrolled";

  //   const res = await fetch("http://localhost:8000/students", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(datas),
  //   });
  //   console.log(datas);

  //   if (res.ok) {
  //     navigate("/admission/enroll-student");
  //   } else {
  //     alert(`error${res.status}`);
  //   }
  // };

  const addStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    isLoading;
    try {
      if (snapStudent.program == "BSCS" || "BSIT" || "ACT" || "WAD") {
        studentData.department = "677fb8cf94a19054d2207415";
      } else if (snapStudent.program == "BSHM" || "HRT") {
        studentData.department = "677fbe1894a19054d2207b73";
      } else {
        studentData.department = "677fc5e749af6b48f0ff2c0f";
      }
      const studentDatas = {
        username: snapStudent?.username,
        firstName: snapStudent?.firstName,
        surname: snapStudent?.surname,
        middleName: snapStudent?.middleName,
        email: snapStudent?.email,
        telephone: snapStudent?.telephone,
        phone: snapStudent?.phone,
        semester: snapStudent?.semester,
        // program: snapStudent.program,
        // year: snapStudent?.year,
        schoolYear: snapStudent?.schoolYear,
        // standing: snapStudent?.standing,
        birth: {
          birthDate: snapStudent?.birth?.birthDate,
          birthPlace: snapStudent?.birth?.birthPlace,
          citizenship: snapStudent?.birth?.citizenship,
          sex: snapStudent?.birth?.sex,
          religion: snapStudent?.birth?.religion,
        },
        homeAddress: {
          houseNum: snapStudent?.homeAddress.houseNum,
          streetBrgy: snapStudent?.homeAddress.streetBrgy,
          city: snapStudent?.homeAddress.city,
          district: snapStudent?.homeAddress.district,
          province: snapStudent?.homeAddress.province,
        },
        // cityAddress: {
        //   houseNum: snapStudent?.cityAddress?.houseNum,
        //   streetBrgy: snapStudent?.cityAddress?.streetBrgy,
        //   city: snapStudent?.cityAddress?.city,
        //   district: snapStudent?.cityAddress?.city,
        //   province: snapStudent?.cityAddress?.province,
        // },
        // father: {
        //   firstName: snapStudent?.father.firstName,
        //   middleName: snapStudent?.father.middleName,
        //   lastName: snapStudent?.father.lastName,
        //   occupation: snapStudent?.father.occupation,
        //   companyName: snapStudent?.father.companyName,
        //   companyAddress: snapStudent?.father.companyAddress,
        //   telephone: snapStudent?.father.telephone,
        //   phone: snapStudent?.father.phone,
        //   email: snapStudent?.father.email,
        // },
        // mother: {
        //   firstName: snapStudent?.mother.firstName,
        //   middleName: snapStudent?.mother.middleName,
        //   lastName: snapStudent?.mother.lastName,
        //   occupation: snapStudent?.mother.occupation,
        //   companyName: snapStudent?.mother.companyName,
        //   companyAddress: snapStudent?.mother.companyAddress,
        //   telephone: snapStudent?.mother.telephone,
        //   phone: snapStudent?.mother.phone,
        //   email: snapStudent?.mother.email,
        // },
        // guardian: {
        //   firstName: snapStudent?.guardian.firstName,
        //   middleName: snapStudent?.guardian.middleName,
        //   lastName: snapStudent?.guardian.lastName,
        //   occupation: snapStudent?.guardian.occupation,
        //   companyName: snapStudent?.guardian.companyName,
        //   companyAddress: snapStudent?.guardian.companyAddress,
        //   telephone: snapStudent?.guardian.telephone,
        //   phone: snapStudent?.guardian.phone,
        //   email: snapStudent?.guardian.email,
        //   relationship: snapStudent?.guardian.relationship,
        // },
        // guardianSpouse: {
        //   lastName: snapStudent?.guardianSpouse.lastName,
        //   middleName: snapStudent?.guardianSpouse.middleName,
        //   firstName: snapStudent?.guardianSpouse.firstName,
        //   children: snapStudent?.guardianSpouse.children,
        // },
        siblings: snapStudent?.siblings,
      };
      const response = await apiClient.post("/students", studentDatas);
      console.log("Data to be added :: ", studentDatas);
      navigate("/admission/enroll-student");
      console.log(response);
      toast.success("Successfully added a student");
    } catch (err) {
      toast.error("Error in adding the student :: " + err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // getDepartment();
  }, []);

  // const methods = useForm();
  // const {handleSubmit} = methods;

  return (
    // <FormProvider {...methods}>
    <form onSubmit={addStudent} className="p-10 w-[1100px]">
      <div className="bg-black p-2 text-white rounded-t-md">
        <h1 className="text-2xl text-center font-bold justify-items-stretch">
          EForm
        </h1>
      </div>
      <div className="flex flex-col gap-2 mx-auto border-4 border-black mb-20 p-10 rounded-b-md">
        <EFormSchoolYear />
        <EFormStudent />
        <EFormParents />
        <EformSiblings />
        <section className="flex justify-center px-7 mx-2">
          <button
            onClick={() => {}}
            type="submit"
            className="text-center bg-blue-600 shadow-sm shadow-blue-500/50 hover:scale-105 active:scale-95 font-bold text-white rounded-lg
            w-[40%] py-2 duration-200"
          >
            {isLoading ? (
              "Enroll Student"
            ) : (
              <img src="/loading.svg" className="invert px-5" alt="" />
            )}
          </button>
        </section>
      </div>
    </form>
    // </FormProvider>
  );
}

export default EForm;
