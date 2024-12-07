import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
  birthDate: string;
  course: string;
  year: string;
  occupation: string;
}

const Fetch = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:8000/students");
      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data: Student[] = await response.json();
      setStudents(data);
    } catch (err) {
      setError("Error fetching students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="m-20">
      <span className="flex flex-col justify-center bg-slate-100 p-10 rounded-md">
        <h1 className="text-center pb-5 font-bold">List of students</h1>
        {students.map((data) => (
          <ul key={data.id} className="p-1">
            <li className="p-1 pl-4 rounded-md hover:bg-red-200 duration-200">
              <a href="" className="">
                {data.lastName}, {data.firstName} {data.middleName[0]}.
              </a>
            </li>
          </ul>
        ))}
      </span>
    </div>
  );
};

export default Fetch;
