import { FaPlus } from "react-icons/fa";
import AddFee from "./AddFee";
import { useState } from "react";

interface StudentFee {
  id: string;
  studentId: string;
  studentName: string;
  feeType: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

const StudentFees = () => {
  const sampleData: StudentFee[] = [
    {
      id: "1",
      studentId: "2024-001",
      studentName: "Juan Dela Cruz",
      feeType: "Tuition Fee",
      amount: 25000,
      dueDate: "2024-01-15",
      status: "pending",
    },
    {
      id: "2",
      studentId: "2024-001",
      studentName: "Juan Dela Cruz",
      feeType: "Tuition Fee",
      amount: 25000,
      dueDate: "2024-01-15",
      status: "pending",
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="w-[1100px] h-[600px] rounded-lg border">
      <div className="bg-blue-600 py-5 text-white mb-6 rounded-t-lg">
        <h1 className="text-2xl text-center font-bold">
          Student Fees Management
        </h1>
      </div>

      <div className="mb-6 flex justify-end px-10">
        <button
          type="button"
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaPlus /> Add Fee
        </button>
      </div>

      <div className="overflow-x-auto pb-10 relative w-[100%] h-[95%]">
        <table className="w-[100%] h-[85%] border flex flex-col rounded-b-md bg-white duration-200 py-10 px-12 overflow-hidden overflow-y-scroll no-scrollbar">
          <thead>
            <tr className="grid grid-cols-7 text-lg font-bold gap-3 p-2 border-b mb-5 text-slate-800 border-slate-300 items-center w-[100%] h-[100%]">
              <th className="px-6 py-3 border-b text-left">Student ID</th>
              <th className="px-6 py-3 border-b text-left">Student Name</th>
              <th className="px-6 py-3 border-b text-left">Fee Type</th>
              <th className="px-6 py-3 border-b text-left">Amount</th>
              <th className="px-6 py-3 border-b text-left">Due Date</th>
              <th className="px-6 py-3 border-b text-left">Status</th>
              <th className="px-6 py-3 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((fee, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">{fee.studentId}</td>
                <td className="px-6 py-4 border-b">{fee.studentName}</td>
                <td className="px-6 py-4 border-b">{fee.feeType}</td>
                <td className="px-6 py-4 border-b">
                  ₱{fee.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 border-b">{fee.dueDate}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      fee.status === "paid"
                        ? "bg-green-100 text-green-800"
                        : fee.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {fee.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">
                  <div className="flex gap-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                      Record Payment
                    </button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded-md text-sm">
                      View Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form
          className={`${
            isOpen ? "w-0 opacity-0 left-0" : "w-[400px] opacity-100 left-1/2"
          } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 flex flex-col justify-center border`}
        >
          Add Fee
          <AddFee />
        </form>
      </div>
    </div>
  );
};

export default StudentFees;
