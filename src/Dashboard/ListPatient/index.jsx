import React, { useState } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Họ Và Tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tuổi",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Bệnh",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Ngày",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "Chỉnh sửa",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary">Xem Chi Tiết</Button>
      </Space>
    ),
  },
];

// Sample data (without using faker)
const sampleData = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "Viêm xoang",
    date: "01/01/2025",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "Đau lưng",
    date: "02/01/2025",
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Cảm cúm",
    date: "03/01/2025",
  },
  {
    key: 4,
    name: "Sara White",
    age: 28,
    address: "Viêm phổi",
    date: "04/01/2025",
  },
  {
    key: 5,
    name: "David Wang",
    age: 36,
    address: "Cảm lạnh",
    date: "05/01/2025",
  },
  // Add more sample data here as needed
];

const ListPatient = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = sampleData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ margin: "0 20px" }}>
      <h2 className="mb-4 text-center">Danh sách thông tin khám bệnh</h2>

      {/* Search input */}
      <div style={{ textAlign: "right", marginBottom: 20 }}>
        <Input
          placeholder="Tìm kiếm theo tên"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
          style={{
            width: 300,
            borderRadius: 8,
            padding: "5px 15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Table with custom styling */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default ListPatient;
