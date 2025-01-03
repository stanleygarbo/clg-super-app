import React from 'react';
import { FaPersonBooth, FaUsers, FaFileInvoice, FaChartLine } from 'react-icons/fa';

const AccountingDashboard: React.FC = () => {
  return (
    <div className="p-10">
      <div className="bg-black p-2 text-white mb-6">
        <h1 className="text-2xl text-center font-bold">Accounting Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Revenue Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center gap-4">
            <FaPersonBooth className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold">₱1,234,567.00</p>
            </div>
          </div>
        </div>

        {/* Pending Payments Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center gap-4">
            <FaUsers className="text-3xl text-green-600" />
            <div>
              <p className="text-gray-600 text-sm">Pending Payments</p>
              <p className="text-2xl font-bold">42</p>
            </div>
          </div>
        </div>

        {/* Monthly Expenses Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center gap-4">
            <FaFileInvoice className="text-3xl text-orange-600" />
            <div>
              <p className="text-gray-600 text-sm">Monthly Expenses</p>
              <p className="text-2xl font-bold">₱456,789.00</p>
            </div>
          </div>
        </div>

        {/* Total Balance Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center gap-4">
            <FaChartLine className="text-3xl text-purple-600" />
            <div>
              <p className="text-gray-600 text-sm">Total Balance</p>
              <p className="text-2xl font-bold">₱777,778.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingDashboard;
