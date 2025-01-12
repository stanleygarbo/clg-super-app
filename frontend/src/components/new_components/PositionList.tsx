// src/components/PositionList.tsx
import { useState, useEffect } from "react";
import apiClient from "../../api/apiClient";
import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddPosition from "./AddPosition";
import { positionData } from "../../store/PositionData";

type deptData = {
  _id: string;
  jobTitle: string;
  hourlyWage: number;
};

const PositionList = () => {
  const [positions, setPositions] = useState<deptData[]>([]);
  let id: any;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  // const navigate = useNavigate();
  const [addPosition, setAddPosition] = useState<typeof positionData>();

  const fetchPositions = async () => {
    try {
      const response = await apiClient.get("/positions");
      setPositions(response.data.results);
      console.log("Positions : ", positions);
    } catch (err) {
    } finally {
    }
  };

  const deletePosition = async () => {
    try {
      const response = await apiClient.delete("/positions/" + id);
      console.log(response);
    } catch (err) {
    } finally {
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      console.log("To be Added : ", addPosition);
      const response = await apiClient.post("/positions", {
        jobTitle: addPosition?.jobTitle,
        hourlyWage: addPosition?.hourlyWage,
      });
      console.log(response);
      setIsOpen(true);
      toast.success("Position added successfully!");
      // navigate("/admin/position");
    } catch (err) {
      setError("Error adding Position");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setAddPosition(positionData);
    fetchPositions();
  }, [positions.length]);

  return (
    <div className="pt-10">
      <section className="font-bold text-2xl text-white bg-blue-600 py-5 text-center w-[1000px] rounded-t-md relative">
        <h1>List of Departments</h1>
        <button
          type="button"
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          className="absolute right-0 top-1 mr-10 mt-4 py-1 rounded-md px-5 border border-black bg-white text-black text-lg hover:scale-105 active:scale-100 duration-200"
        >
          Add
        </button>
      </section>
      <div className="grid grid-cols-4 gap-3 p-10 shadow-sm border rounded-b-md w-[1000px] h-[500px] relative overflow-scroll no-scrollbar">
        {positions.map((post, index) => (
          <section
            key={index}
            className="relative group bg-blue-600 p-2 w-[180px] h-[60px] text-white font-semibold flex justify-center items-center rounded-md shadow-sm shadow-blue-600/50 duration-200"
          >
            <h1 className="">
              {post.jobTitle} : {post.hourlyWage}
            </h1>
            <button
              type="button"
              onClick={() => {
                id = post._id;
                deletePosition();
              }}
              className="absolute top-0 right-0 mt-1 mr-1 opacity-0 text-red-600 text-sm p-[3px] shadow-md rounded-md bg-white group-hover:opacity-100 hover:scale-110 duration-200"
            >
              <MdDelete />
            </button>
          </section>
        ))}
        <form
          onSubmit={handleSubmit}
          className={`${
            isOpen ? "opacity-0 w-0 left-0" : "w-[400px] opacity-100 left-1/2"
          } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md border rounded-md duration-150 overflow-hidden p-5 flex flex-col justify-center`}
        >
          <h2 className="text-2xl font-semibold mb-4 flex justify-between">
            Add Position{" "}
            <button
              type="button"
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
              className="mr-3 bg-red-600 py- px-3 text-lg text-white rounded-md shadow-md font-bold hover:scale-105 duration-200"
            >
              X
            </button>
          </h2>
          <AddPosition />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 mx-5 py-2 text-white font-bold rounded-md shadow-md hover:scale-105 active:scale-95 duration-200"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Position"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PositionList;
