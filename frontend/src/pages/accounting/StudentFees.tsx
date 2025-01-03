import React from 'react';
import { Table, Button, Typography, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography;

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
  const columns: ColumnsType<StudentFee> = [
    {
      title: 'Student ID',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
    },
    {
      title: 'Fee Type',
      dataIndex: 'feeType',
      key: 'feeType',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `₱${amount.toLocaleString()}`,
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = status === 'paid' ? 'green' : status === 'pending' ? 'gold' : 'red';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Record Payment</Button>
          <Button>View Details</Button>
        </Space>
      ),
    },
  ];

  const data: StudentFee[] = [
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Title level={2}>Student Fees Management</Title>
        <Button type="primary" size="large">Add New Fee</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default StudentFees;
