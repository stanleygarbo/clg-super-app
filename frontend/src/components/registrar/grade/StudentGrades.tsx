import { useMutation, useQuery } from "@tanstack/react-query";
import { getGradeByStudentId, updateGrade } from "../../../api/grade";
import { toast } from "react-toastify";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IGrades, ISubjectGrade } from "../../../interface/IGrades";

type YearLevel = "freshman" | "sophomore" | "junior" | "senior";
type Semester = "sem1" | "sem2";

const StudentGrades = () => {
  const { id } = useParams();
  const [year, setYear] = useState<YearLevel>("freshman");
  const [sem, setSem] = useState<Semester>("sem1");
  const [sub, setSub] = useState("");

  // Fetch existing grades
  const { data: gradeData, isLoading } = useQuery({
    queryKey: ["grade", id],
    queryFn: () => getGradeByStudentId(id!),
    enabled: !!id,
  });

  const updateMutation = useMutation({
    mutationFn: updateGrade,
    onSuccess: () => {
      toast.success("Grade saved successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  console.log(gradeData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!gradeData) return toast.error("No grade record found");

    // Clone the existing gradeData
    const updatedData: IGrades = { ...gradeData };

    // Ensure year and sem exist
    if (!updatedData[year]) {
      updatedData[year] = { sem1: { subjects: [] }, sem2: { subjects: [] } };
    }
    if (!updatedData[year][sem]) {
      updatedData[year][sem] = { subjects: [] };
    }

    const subjects = updatedData[year][sem].subjects;
    const existingIndex = subjects.findIndex(
      (s: ISubjectGrade) => s.name === sub
    );

    if (existingIndex !== -1) {
      // Update existing subject's grades
      subjects[existingIndex].grades = {
        prelim: 0,
        midterm: 0,
        prefi: 0,
        final: 0,
      };
    } else {
      // Add new subject
      subjects.push({
        name: sub,
        grades: {
          prelim: 0,
          midterm: 0,
          prefi: 0,
          final: 0,
        },
      });
    }

    updateMutation.mutate({ id: gradeData._id, data: updatedData });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl mb-2">Add / Update Grade</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value as YearLevel)}
          >
            <option value="freshman">1st Year</option>
            <option value="sophomore">2nd Year</option>
            <option value="junior">3rd Year</option>
            <option value="senior">4th Year</option>
          </select>

          <select
            value={sem}
            onChange={(e) => setSem(e.target.value as Semester)}
          >
            <option value="sem1">Sem 1</option>
            <option value="sem2">Sem 2</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Subject Name"
          className="border p-1"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Save Grade
        </button>
      </form>
      <section>{gradeData}</section>
    </div>
  );
};

export default StudentGrades;
