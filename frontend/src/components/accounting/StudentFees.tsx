import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';

interface StudentFee {
  id: string;
  studentId: string;
  studentName: string;
  feeType: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

const StudentFees: React.FC = () => {
  const methods = useForm();

  const sampleData: StudentFee[] = [
    {
      id: '1',
      studentId: '2024-001',
      studentName: 'Juan Dela Cruz',
      feeType: 'Tuition Fee',
      amount: 25000,
      dueDate: '2024-01-15',
      status: 'pending',
    },
    // Add more sample data as needed
  ];

  return (
    <div className="p-10">
      <div className="bg-black p-2 text-white mb-6">
        <h1 className="text-2xl text-center font-bold">Student Fees Management</h1>
      </div>

      <div className="mb-6 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaPlus /> Add New Fee
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
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
            {sampleData.map((fee) => (
              <tr key={fee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">{fee.studentId}</td>
                <td className="px-6 py-4 border-b">{fee.studentName}</td>
                <td className="px-6 py-4 border-b">{fee.feeType}</td>
                <td className="px-6 py-4 border-b">₱{fee.amount.toLocaleString()}</td>
                <td className="px-6 py-4 border-b">{fee.dueDate}</td>
                <td className="px-6 py-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    fee.status === 'paid' ? 'bg-green-100 text-green-800' :
                    fee.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
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
      </div>
    </div>
  );
};

export default StudentFees;
