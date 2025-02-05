import React, { useEffect, useState } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllUser } from "../../store/userSlice";
import dayjs from "dayjs";

const ListPatient = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.USER.users);
  console.log("userData", userData);

  useEffect(() => {
    dispatch(fetchGetAllUser());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const calculateAge = (dob) => {
    return dayjs().diff(dayjs(dob), "year");
  };
  const filteredData = userData
    ? userData
        .map((item) => ({
          key: item.userid,
          fullname: item.fullname,
          gender: item.gender,
          dateofbirth: dayjs(item.dateofbirth).format("DD/MM/YYYY"),
          phonenumber: item.phonenumber,
          age: calculateAge(item.dateofbirth),
        }))
        .filter((item) =>
          item.fullname.toLowerCase().includes(searchText.toLowerCase())
        )
    : [];

  const columns = [
    {
      title: "Họ và Tên",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giới Tính",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Ngày Sinh",
      dataIndex: "dateofbirth",
      key: "dateofbirth",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phonenumber",
      key: "phonenumber",
    },
    {
      title: "Chỉnh Sửa",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Xem Chi Tiết</Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ margin: "0 20px" }}>
      <h2 className="mb-4 text-center">Danh sách bệnh nhân</h2>

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

      {/* Table */}
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 10 }}
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
