import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../../../api/student";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getPrograms } from "../../../api/programs";
import { IProgramGet } from "../../../interface/IProgram";
import { IStudentsGet, IStudentsPost } from "../../../interface/IStudents";
import { useForm } from "react-hook-form";
import Input from "../../props/Input";
import Select from "../../props/Select";

const StudentsInfo = () => {
  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  const [type, setType] = useState<"button" | "submit" | "reset" | undefined>(
    "button"
  );
  // const [loading, setLoading] = useState(true);
  // const snapStudent = useSnapshot(studentGetData);
  const navigate = useNavigate();
  // const [sibling, setSibling] = useState<ISibling[]>([]);
  const { id } = useParams();
  const { handleSubmit, register, reset, watch } = useForm<IStudentsPost>();

  if (!id) return;

  const query = useQuery<IStudentsGet>({
    queryKey: ["student", id],
    queryFn: () => getStudentById({ id }),
    enabled: !!id,
  });

  const programs = useQuery({
    queryKey: ["departments"],
    queryFn: getPrograms,
  });

  const updateStudMutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      toast.success("Updated Successfully");
      query.refetch();
      navigate("/admission/enroll-student");
    },
    onError: (err: any) => {
      toast.error(err.response.data.message, {});
    },
  });

  useEffect(() => {
    if (query.data) {
      reset({
        firstName: query.data?.firstName,
        surname: query.data?.surname,
        middleName: query.data?.middleName,
        email: query.data?.email,
        username: query.data?.username,
        schoolYear: query.data?.schoolYear,
        program: query.data?.program._id,
        // roles: deaf,
        phone: query.data?.phone,
        documents: query.data?.documents,
        // grades: query.data?.grades,
        spouse: {
          lastName: query.data?.spouse?.lastName,
          middleName: query.data?.spouse?.middleName,
          firstName: query.data?.spouse?.firstName,
          children: query.data?.spouse?.children,
        },
        birth: {
          birthDate: query.data?.birth.birthDate?.toString().split("T")[0],
          birthPlace: query.data?.birth.birthPlace,
          religion: query.data?.birth.religion,
          citizenship: query.data?.birth.citizenship,
        },
        homeAddress: {
          houseNum: query.data?.homeAddress?.houseNum,
          streetBrgy: query.data?.homeAddress?.streetBrgy,
          city: query.data?.homeAddress?.city,
          province: query.data?.homeAddress?.province,
          district: query.data?.homeAddress?.district,
        },
        cityAddress: {
          houseNum: query.data?.cityAddress?.houseNum,
          streetBrgy: query.data?.cityAddress?.streetBrgy,
          city: query.data?.cityAddress?.city,
          province: query.data?.cityAddress?.province,
          district: query.data?.cityAddress?.district,
        },
        guardian: {
          lastName: query.data?.guardian?.lastName,
          firstName: query.data?.guardian?.firstName,
          middleName: query.data?.guardian?.middleName,
          email: query.data?.guardian?.email,
          relationship: query.data?.guardian?.relationship,
          companyName: query.data?.guardian?.companyName,
          companyAddress: query.data?.guardian?.companyAddress,
          phone: query.data?.guardian?.phone,
          occupation: query.data?.guardian?.occupation,
        },
      });
    }

    if (
      query.data?.cityAddress?.streetBrgy ||
      query.data?.cityAddress?.province ||
      query.data?.cityAddress?.district ||
      query.data?.cityAddress?.city != null
    ) {
      setCheckboarding(true);
    }
  }, [query.data, reset]);

  // const snap = useSnapshot(sidebarState);
  // const isOpen = snap.isOpen;
  const [checkboarding, setCheckboarding] = useState<boolean>(false);
  const [maritalStatus, setMaritalStatus] = useState("");
  // const selectedProgram = watch("program");
  const middleName = watch("middleName") || "";
  const lastName = watch("surname") || "";
  const firstName = watch("firstName") || "";
  const schoolYear = watch("schoolYear") || "";
  const username = watch("username") || "";
  const email = watch("email") || "";
  const phone = watch("phone") || "";
  const spouseLastName = watch("spouse.lastName") || "";
  const spouseFirstName = watch("spouse.firstName") || "";
  const spouseMiddleName = watch("spouse.middleName") || "";
  const spouseChildren = watch("spouse.children");
  const birthDate = watch("birth.birthDate") || " ";
  const citizenship = watch("birth.citizenship") || "";
  const religion = watch("birth.religion") || "";
  const homeCity = watch("homeAddress.city") || "";
  const homeHouse = watch("homeAddress.houseNum") || "";
  const homeProvince = watch("homeAddress.province") || "";
  const homeStreet = watch("homeAddress.streetBrgy") || "";
  const homeDistrict = watch("homeAddress.district") || "";
  const cityHouse = watch("cityAddress.houseNum") || "";
  const cityCity = watch("cityAddress.city") || "";
  const cityProvince = watch("cityAddress.province") || "";
  const cityStreet = watch("cityAddress.streetBrgy") || "";
  const cityDistrict = watch("cityAddress.district") || "";
  const guardianLastName = watch("guardian.lastName") || "";
  const guardianFirstName = watch("guardian.firstName") || "";
  const guardianMiddle = watch("guardian.middleName") || "";
  const guardianEmail = watch("guardian.email") || "";
  const guardianPhone = watch("guardian.phone") || "";
  const guardianCompany = watch("guardian.companyName") || "";
  const guardianCompanyAddress = watch("guardian.companyAddress") || "";
  const guardianOccupation = watch("guardian.occupation") || "";
  const guardianRelationship = watch("guardian.relationship") || "";

  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit((data) => {
          if (!id) {
            toast.error("No employee ID found!");
            return;
          }
          updateStudMutation.mutate({ data, id });
        })}
        className="xl:mb-10 xl:mt-5 flex flex-col rounded-lg w-full xl:w-[1200px] gap-5 bg-slate-50"
      >
        <h1 className="text-2xl font-bold xl:mb-10 xl:rounded-t-lg text-white text-center bg-blue-800 py-4">
          Update Student
        </h1>
        <div className="flex flex-col gap-5 px-10 pb-10">
          <section className="xl:absolute bg-blue-100 top-[150px] right-[953px] flex gap-10 px-5 rounded-md p-3 ">
            <div className="flex flex-col">
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="nso"
                  {...register("documents.birthCertificate")}
                  // defaultChecked={query.data?.documents?.birthCertificate}
                />
                <label htmlFor="nso">NSO</label>
              </span>
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="form137"
                  {...register("documents.form137")}
                  // defaultChecked={query.data?.documents?.tin}
                />
                <label htmlFor="form137">Form 137</label>
              </span>
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="form138"
                  {...register("documents.form138")}
                  // defaultChecked={query.data?.documents?.tin}
                />
                <label htmlFor="form138">Form 138</label>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="goodmoral"
                  {...register("documents.goodMoral")}
                  // defaultChecked={query.data?.documents?.birthCertificate}
                />
                <label htmlFor="goodmoral">Good Moral</label>
              </span>
              {/* <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="tor"
                {...register("documents.tor")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="tor">TOR</label>
            </span>
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="philhealth"
                {...register("documents.philhealth")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="philhealth">Philhealth</label>
            </span> */}
            </div>
          </section>
          <section className="flex gap-3 justify-end pt-20">
            <button
              disabled={isUpdate}
              type="button"
              onClick={() => {
                isUpdate ? setIsUpdate(false) : setIsUpdate(true);
              }}
              className={`${
                isUpdate
                  ? "bg-red-600 shadow-red-500/50 opacity-0"
                  : "bg-red-500 shadow-red-500/50 opacity-100"
              } p-1 px-4 text-white font-bold text-xl rounded-md shadow-sm  hover:scale-105 active:scale-95 duration-200`}
            >
              Cancel
            </button>
            <button
              disabled={isUpdate && !query.data}
              type={type}
              onClick={() => {
                isUpdate ? setType("button") : setType("submit");
                setIsUpdate(false);
              }}
              className={`${
                isUpdate
                  ? "bg-blue-600 shadow-blue-500/50 disabled:opacity-50"
                  : "bg-green-600 shadow-green-500/50 "
              } p-1 px-4 text-white font-bold text-xl rounded-md shadow-sm  hover:scale-105 active:scale-95 duration-200`}
            >
              {isUpdate ? (
                "Edit"
              ) : updateStudMutation.isPending ? (
                <img src="/loading.svg" className="invert px-5" alt="" />
              ) : (
                "Update"
              )}
            </button>
          </section>
          <section className="flex justify-between">
            <h1 className="text-lg font-bold">Student Information </h1>
          </section>

          <span className="grid xl:grid-cols-5 gap-3 xl:gap-2 w-full">
            <Input
              label="Last Name"
              register={register("surname")}
              value={lastName}
              readOnly={isUpdate}
            />
            <Input
              label="First Name"
              value={firstName}
              readOnly={isUpdate}
              register={register("firstName")}
            />
            <Input
              label="Middle Name"
              value={middleName}
              readOnly={isUpdate}
              register={register("middleName")}
            />
            <Select
              options={programs.data?.results?.map((prog: IProgramGet) => {
                return { value: prog._id, label: prog.programAcronym };
              })}
              disabled={isUpdate}
              label="Program"
              selected={query.data?.program?._id || ""}
              register={register("program")}
            />
            <Select
              label="Standing"
              options={[
                { value: "freshman", label: "Freshman" },
                { value: "sophomore", label: "Sophomore" },
                { value: "junior", label: "Junior" },
                { value: "senoir", label: "Senoir" },
              ]}
              disabled={isUpdate}
              selected={query.data?.standing || ""}
              register={register("standing")}
            />
          </span>
          <span className="grid xl:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-2">
            <Input
              label="School Year"
              readOnly={isUpdate}
              value={schoolYear}
              register={register("schoolYear")}
            />
            <Input
              label="Username"
              readOnly={isUpdate}
              value={username}
              register={register("username")}
            />

            <Input
              label="Phone"
              readOnly={isUpdate}
              value={phone}
              register={register("phone")}
            />
            <Select
              label="Marital Status"
              disabled={isUpdate}
              onChange={setMaritalStatus}
              selected={
                query.data?.maritalStatus ? query.data.maritalStatus : ""
              }
              options={[
                { value: "single", label: "Single" },
                { value: "married", label: "Married" },
                { value: "widow", label: "Widow" },
              ]}
              register={register("maritalStatus")}
            />
            <Input
              value={email}
              label="Email"
              type="email"
              register={register("email")}
              readOnly={isUpdate}
            />
          </span>
          <span className="grid xl:grid-cols-5 gap-2">
            <Input
              label="Birthdate"
              value={birthDate}
              type={isUpdate ? "text" : "date"}
              readOnly={isUpdate}
              register={register("birth.birthDate")}
            />
            <Input
              value={query.data?.birth.birthPlace}
              label="Birthplace"
              readOnly={isUpdate}
              register={register("birth.birthPlace")}
            />
            <Input
              value={citizenship}
              label="Citizenship"
              readOnly={isUpdate}
              register={register("birth.citizenship")}
            />
            <Select
              label="Gender"
              disabled={isUpdate}
              selected={query.data?.birth.sex || ""}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
              register={register("birth.sex")}
            />
            <Input
              value={religion}
              label="Religion"
              readOnly={isUpdate}
              register={register("birth.religion")}
            />
          </span>
          {(query.data?.spouse?.lastName ||
            query.data?.spouse.firstName ||
            query.data?.spouse.middleName ||
            query.data?.spouse.children ||
            maritalStatus === "married") && (
            <div className="flex flex-col gap-5">
              <h1 className="text-sm font-bold">
                Student Spouse Information :{" "}
              </h1>
              <span className="grid xl:grid-cols-4 gap-2">
                <Input
                  value={spouseLastName}
                  label="Last Name"
                  readOnly={isUpdate}
                  register={register("spouse.lastName")}
                />
                <Input
                  value={spouseFirstName}
                  label="First Name"
                  readOnly={isUpdate}
                  register={register("spouse.firstName")}
                />
                <Input
                  value={spouseMiddleName}
                  label="Middle Name"
                  readOnly={isUpdate}
                  register={register("spouse.middleName")}
                />
                <Input
                  value={spouseChildren}
                  type="number"
                  label="No. of Child"
                  readOnly={isUpdate}
                  register={register("spouse.children")}
                />
              </span>
            </div>
          )}
          <section className="flex justify-between">
            <h1 className="text-sm font-bold">Home Address : </h1>
            <section className="flex gap-3 items-center">
              <input
                type="checkbox"
                id="boarding"
                className="w-4 h-4 disabled:cursor-not-allowed"
                checked={checkboarding}
                disabled={
                  !!(
                    query.data?.cityAddress?.city ||
                    query.data?.cityAddress?.province ||
                    query.data?.cityAddress?.streetBrgy ||
                    query.data?.cityAddress?.district
                  ) || isUpdate
                }
                onClick={() => {
                  if (
                    !query.data?.cityAddress?.streetBrgy ||
                    !query.data?.cityAddress?.province ||
                    !query.data?.cityAddress?.district ||
                    query.data?.cityAddress.city
                  ) {
                    setCheckboarding(!checkboarding);
                  }
                }}
              />
              <label htmlFor="boarding" className="text-blue-700 font-bold">
                ( check if boarding)
              </label>
            </section>
          </section>
          <span className="grid xl:grid-cols-5 gap-2">
            <Input
              value={String(homeHouse)}
              label="House No."
              type="number"
              readOnly={isUpdate}
              register={register("homeAddress.houseNum")}
            />
            <Input
              value={homeStreet}
              label="Brgy./Street"
              readOnly={isUpdate}
              register={register("homeAddress.streetBrgy")}
            />
            <Input
              value={homeCity}
              label="City"
              readOnly={isUpdate}
              register={register("homeAddress.city")}
            />
            <Input
              value={homeProvince}
              label="Province"
              readOnly={isUpdate}
              register={register("homeAddress.province")}
            />
            <Input
              value={homeDistrict}
              label="District"
              readOnly={isUpdate}
              register={register("homeAddress.district")}
            />
          </span>
          {(query.data?.cityAddress?.streetBrgy ||
            query.data?.cityAddress?.district ||
            query.data?.cityAddress?.province ||
            query.data?.cityAddress?.city ||
            checkboarding) && (
            <div>
              <h1 className="text-sm font-bold pb-5">
                Address ( if Boarding ) :{" "}
              </h1>
              <span className="grid xl:grid-cols-5 gap-2">
                <Input
                  value={cityHouse}
                  label="House No."
                  readOnly={isUpdate}
                  register={register("cityAddress.houseNum")}
                />
                <Input
                  value={cityStreet}
                  label="Brgy./Street"
                  readOnly={isUpdate}
                  register={register("cityAddress.streetBrgy")}
                />
                <Input
                  value={cityCity}
                  label="City"
                  readOnly={isUpdate}
                  register={register("cityAddress.city")}
                />
                <Input
                  value={cityProvince}
                  label="Province"
                  readOnly={isUpdate}
                  register={register("cityAddress.province")}
                />
                <Input
                  value={cityDistrict}
                  label="District"
                  readOnly={isUpdate}
                  register={register("cityAddress.district")}
                />
              </span>
            </div>
          )}
          <h1 className="text-sm font-bold">Guardian Information : </h1>
          <span className="grid xl:grid-cols-5 gap-2">
            <Input
              value={guardianLastName}
              label="Last Name"
              readOnly={isUpdate}
              register={register("guardian.lastName")}
            />
            <Input
              value={guardianFirstName}
              label="First Name"
              readOnly={isUpdate}
              register={register("guardian.firstName")}
            />
            <Input
              value={guardianMiddle}
              label="Middle Name"
              readOnly={isUpdate}
              register={register("guardian.middleName")}
            />
            <Input
              value={guardianOccupation}
              label="Occupation"
              readOnly={isUpdate}
              register={register("guardian.occupation")}
            />
            <Input
              value={guardianRelationship}
              label="Relationship"
              readOnly={isUpdate}
              register={register("guardian.relationship")}
            />
          </span>
          <span className="grid xl:grid-cols-[1fr_1fr_1fr_2fr] gap-2">
            <Input
              value={guardianCompany}
              label="Company Name"
              readOnly={isUpdate}
              register={register("guardian.companyName")}
            />
            <Input
              value={guardianCompanyAddress}
              label="Company Address"
              readOnly={isUpdate}
              register={register("guardian.companyAddress")}
            />
            <Input
              value={guardianPhone}
              label="Phone"
              readOnly={isUpdate}
              register={register("guardian.phone")}
            />
            <Input
              value={guardianEmail}
              label="Email"
              readOnly={isUpdate}
              register={register("guardian.email")}
            />
          </span>
          {query.data?.guardianSpouse?.lastName && (
            <div>
              <h1 className="text-sm font-bold">
                Guardian Spouse Information :{" "}
              </h1>
              <span className="grid grid-cols-3 gap-2">
                <section
                  className={`grid items-start bg-blue-100 pt-2 rounded-lg`}
                >
                  <p className="text-xs font-semibold px-3">Last Name</p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    defaultValue={query.data?.guardianSpouse?.lastName}
                    {...register("guardianSpouse.lastName")}
                    className="outline-none bg-inherit pb-1 text-center text-lg rounded-b-lg"
                  />
                </section>
                <section
                  className={`grid items-start bg-blue-100 pt-2 rounded-lg`}
                >
                  <p className="text-xs font-semibold px-3">First Name</p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    defaultValue={query.data?.guardianSpouse?.firstName}
                    {...register("guardianSpouse.firstName")}
                    className="outline-none bg-inherit pb-1 text-center text-lg rounded-b-lg"
                  />
                </section>
                <section
                  className={`grid items-start bg-blue-100 pt-2 rounded-lg`}
                >
                  <p className="text-xs font-semibold px-3">Middle Name</p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    defaultValue={query.data?.guardianSpouse?.middleName}
                    {...register("guardianSpouse.middleName")}
                    className="outline-none bg-inherit pb-1 text-center text-lg rounded-b-lg"
                  />
                </section>
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default StudentsInfo;
