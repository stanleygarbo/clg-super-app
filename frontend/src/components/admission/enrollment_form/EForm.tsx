import EFormSchoolYear from "./EFormSchoolYear";
import EFormStudent from "./EFormStudent";
import EFormParents from "./EFormParents";
import EformSiblings from "./EformSiblings";
import { useNavigate } from "react-router-dom";
import { studentData } from "../../../store/StudentData";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { useSnapshot } from "valtio";

function EForm() {
  const snapStudent = useSnapshot(studentData);
  const navigate = useNavigate();
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

  const addStudent = async () => {
    try {
      const studentDatas = {
        username: snapStudent.username,
        firstName: snapStudent.firstName,
        surname: snapStudent.surname,
        middleName: snapStudent.middleName,
        email: snapStudent.email,
        telephone: snapStudent.telephone,
        phone: snapStudent.phone,
        roles: [snapStudent.roles],
        spouse: {
          lastName: snapStudent.spouse.firstName,
          middleName: snapStudent.spouse.middleName,
          firstName: snapStudent.spouse.firstName,
          children: snapStudent.spouse.children,
        },
        program: snapStudent.program,
        standing: snapStudent.standing,
        birth: {
          birthDate: snapStudent.birth.birthDate,
          birthPlace: snapStudent.birth.birthPlace,
          citizenship: snapStudent.birth.citizenship,
          sex: snapStudent.birth.sex,
          religion: snapStudent.birth.religion,
        },
        homeAddress: {
          houseNum: snapStudent.homeAddress.houseNum,
          streetBrgy: snapStudent.homeAddress.streetBrgy,
          city: snapStudent.homeAddress.city,
          district: snapStudent.homeAddress.district,
          province: snapStudent.homeAddress.province,
        },
        cityAddress: {
          houseNum: snapStudent.cityAddress.houseNum,
          streetBrgy: snapStudent.cityAddress.streetBrgy,
          city: snapStudent.cityAddress.city,
          district: snapStudent.cityAddress.city,
          province: snapStudent.cityAddress.province,
        },
        father: {
          firstName: snapStudent.father.firstName,
          middleName: snapStudent.father.middleName,
          lastName: snapStudent.father.lastName,
          occupation: snapStudent.father.occupation,
          companyName: snapStudent.father.companyName,
          companyAddress: snapStudent.father.companyAddress,
          telephone: snapStudent.father.telephone,
          phone: snapStudent.father.phone,
          email: snapStudent.father.email,
        },
        mother: {
          firstName: snapStudent.mother.firstName,
          middleName: snapStudent.mother.middleName,
          lastName: snapStudent.mother.lastName,
          occupation: snapStudent.mother.occupation,
          companyName: snapStudent.mother.companyName,
          companyAddress: snapStudent.mother.companyAddress,
          telephone: snapStudent.mother.telephone,
          phone: snapStudent.mother.phone,
          email: snapStudent.mother.email,
        },
        guardian: {
          firstName: snapStudent.guardian.firstName,
          middleName: snapStudent.guardian.middleName,
          lastName: snapStudent.guardian.lastName,
          occupation: snapStudent.guardian.occupation,
          companyName: snapStudent.guardian.companyName,
          companyAddress: snapStudent.guardian.companyAddress,
          telephone: snapStudent.guardian.telephone,
          phone: snapStudent.guardian.phone,
          email: snapStudent.guardian.email,
          relationship: snapStudent.guardian.relationship,
        },
        guardianSpouse: {
          lastName: snapStudent.guardianSpouse.lastName,
          middleName: snapStudent.guardianSpouse.middleName,
          firstName: snapStudent.guardianSpouse.firstName,
          children: snapStudent.guardianSpouse.children,
        },
        siblings: [
          {
            fullName: snapStudent.siblings.fullName,
            age: snapStudent.siblings.age,
            occupationSchool: snapStudent.siblings.occupationSchool,
          },
        ],
      };
      const response = await apiClient.post("/students", studentDatas);
      console.log(response);
      toast.success("Successfully added a student");
    } catch {
    } finally {
    }
  };

  return (
    <form
      onSubmit={addStudent}
      className="p-10 w-full max-w-[1280px] xs:mx-1 sm:mx-2 md:mx-60 lg:mx-72 xl:"
    >
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
            type="submit"
            className="text-center bg-gradient-to-t from-blue-600 to-blue-400 shadow-lg shadow-blue-500/50 hover:scale-105 font-bold text-white rounded-lg
            w-[40%] py-2 duration-200"
          >
            Enroll Student
          </button>
        </section>
      </div>
    </form>
  );
}

export default EForm;
