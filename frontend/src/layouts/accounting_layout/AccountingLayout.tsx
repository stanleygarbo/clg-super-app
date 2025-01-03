import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaChartBar, FaUsers, FaFileInvoice, FaChartLine, FaCog } from 'react-icons/fa';

const AccountingLayout: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'dashboard',
      icon: <FaChartBar />,
      label: 'Dashboard',
      path: '/admin/accounting/dashboard'
    },
    {
      key: 'student-fees',
      icon: <FaUsers />,
      label: 'Student Fees',
      path: '/admin/accounting/student-fees'
    },
    {
      key: 'expenses',
      icon: <FaFileInvoice />,
      label: 'Expenses',
      path: '/admin/accounting/expenses'
    },
    {
      key: 'reports',
      icon: <FaChartLine />,
      label: 'Financial Reports',
      path: '/admin/accounting/reports'
    },
    {
      key: 'settings',
      icon: <FaCog />,
      label: 'Settings',
      path: '/admin/accounting/settings'
    }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-200">
        <div className="p-4 bg-black text-white">
          <h1 className="text-xl font-bold">Accounting Module</h1>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountingLayout;
