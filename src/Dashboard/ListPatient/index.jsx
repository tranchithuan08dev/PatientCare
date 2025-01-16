import React, { useState } from "react";
import { Space, Table, Tag, Input, Flex, Button } from "antd";
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
      <Flex gap="small" wrap>
        <Button type="primary">Xem Chi Tiết</Button>
      </Flex>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const ListPatient = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-4 text-center">Danh sách thông tin khám bệnh</h2>

      {/* Wrapper div for search */}
      <div style={{ textAlign: "right", marginBottom: 20 }}>
        <Input
          placeholder="Search by name"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
          style={{ width: 300 }}
        />
      </div>

      <Table columns={columns} dataSource={filteredData} />
    </div>
  );
};

export default ListPatient;
