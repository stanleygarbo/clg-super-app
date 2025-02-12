import {
  FaChartLine,
  FaFileInvoice,
  FaPersonBooth,
  FaUsers,
} from "react-icons/fa";

const AccountingDashboard = () => {
  return (
    <div className="w-[1100px] shadow-md border rounded-lg mt-10">
      <div className="bg-blue-600 py-5 text-white mb-6 rounded-t-lg">
        <h1 className="text-2xl text-center font-bold">Accounting Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {/* Total Revenue Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center gap-4">
            <h1>
              <FaPersonBooth className="text-2xl text-blue-600" />
            </h1>

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
