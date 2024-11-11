import { useNavigate } from "react-router-dom";

const AdmissionProfile = () => {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col gap-10 justify-center w-[800px] border shadow-md rounded-md bg-slate-50">
      <section className="flex flex-col gap-5 pt-10 pb-10 mb-5 border-b shadow-sm">
        <p className="font-bold text-center text-xl">Profile</p>
        <div className="flex items-end gap-10 pl-10 h-[150px]">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
            className="w-[125px] h-[125px] bg-blue-400 rounded-md shadow-md content-cover"
          />
          <section className="flex flex-col gap-2 items-center ">
            <p className="text-red-500 font-bold">Admission</p>
          </section>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-3 mx-5 text-center justify-center ">
        <p className="border shadow-sm rounded-lg text-center py-2">
          Last Name
        </p>
        <p className="border shadow-sm rounded-lg text-center py-2">
          First Name
        </p>
        <p className="border shadow-sm rounded-lg text-center py-2">
          Middle Name
        </p>
      </section>
      <section className="grid grid-cols-4 gap-3 mx-5 text-center justify-center ">
        <p className="border shadow-sm rounded-lg text-center py-2">Religion</p>
        <p className="border shadow-sm rounded-lg text-center py-2">Single</p>
        <p className="border shadow-sm rounded-lg text-center py-2">
          Nationality
        </p>
        <p className="border shadow-sm rounded-lg text-center py-2">Gender</p>
      </section>
      <section className="grid grid-cols-2 mx-5 gap-3 text-center justify-center ">
        <p className="border shadow-sm rounded-lg text-center py-2">
          email@gmail.com
        </p>
        <p className="border shadow-sm rounded-lg text-center py-2">xxxxxxx</p>
      </section>
      <section className="grid grid-cols-3 mx-5 gap-3 text-center justify-center ">
        <p className="border shadow-sm rounded-lg text-center py-2">
          brgy. macabug
        </p>
        <p className="border shadow-sm rounded-lg text-center py-2">
          Ormoc City
        </p>
        <p className="border shadow-sm rounded-lg text-center py-2">leyte</p>
      </section>

      <span className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            navigate("/admission/user/updateprofile");
          }}
          className="text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-red-500/50 hover:bg-red-500 w-[100px] h-[30px] rounded-lg font-bold duration-200 m-5"
        >
          Edit
        </button>
      </span>
    </form>
  );
};

export default AdmissionProfile;
