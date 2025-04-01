import { IoListOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SubjectLoad = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-[1100px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Subject Load</h1>
          <button
            onClick={() => {
              navigate("/registrar/schedule/create");
            }}
            className="bg-blue-700 px-3 py-2 text-white font-semibold rounded-md text-sm"
          >
            Add Schedule
          </button>
        </section>
        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between">
          <span className="flex gap-3">
            <button
              className={`bg-blue-600 text-white flex items-center gap-1 px-2 py-2 rounded-md shadow border-t`}
            >
              <p className="font-bold text-lg">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </button>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border border-slate-500 rounded-sm px-5"
              placeholder="Q Search..."
            />
          </span>
        </section>
        <section className="py-3">
          <span className="flex gap-5 mb-3">
            <h1 className="w-[250px] font-bold pl-4">Course</h1>
            <h1 className="w-[230px] font-bold text-center">Action</h1>
          </span>
          <span className="flex gap-5 bg-slate-100 pl-3 py-3 text-sm items-center rounded-md border">
            <h1 className="flex gap-2 items-center w-[240px] pl-4 font-semibold">
              A601
            </h1>
            <h1 className="w-[230px] font-semibold flex gap-2 justify-center">
              <button
                onClick={() => {
                  navigate("/admin/subject-load-details");
                }}
                type="button"
                className="bg-green-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-green-700 active:scale-95 duration-200"
              >
                View
              </button>
              <button
                type="button"
                className="bg-green-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-green-700 active:scale-95 duration-200"
              >
                Update
              </button>
              <button
                type="button"
                className="bg-red-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
              >
                Delete
              </button>
            </h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default SubjectLoad;
