import React, { useEffect, useState } from "react";
import { Table, Input, Button, Space, Drawer, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllUser, fetchUserDetail } from "../../store/userSlice";
import dayjs from "dayjs";
import UserDetail from "./UserDetail";
import DiagnosisDetail from "./DiagnosisDetail";
import MedicineDetail from "./MedicineDetail";

const ListPatient = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
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
          gender: item.gender.toLowerCase() == "female" ? "Nữ" : "Nam",
          dateofbirth: `${dayjs(item.dateofbirth).format(
            "DD/MM/YYYY"
          )} - ${calculateAge(item.dateofbirth)} Tuổi`,
          date: dayjs(item.createat).format("DD/MM/YYYY"),
          phonenumber: item.phonenumber,
        }))
        .filter((item) =>
          item.fullname.toLowerCase().includes(searchText.toLowerCase())
        )
    : [];

  const showDrawer = (id) => {
    console.log("idUsser", id);
    dispatch(fetchUserDetail(id));
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
      title: "Ngày Khám",
      dataIndex: "date",
      key: "date",
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
          <Button type="default">Khám Bệnh</Button>
          <Button type="primary" onClick={() => showDrawer(record.key)}>
            Xem Chi Tiết
          </Button>
        </Space>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: "Hồ sơ",
      children: <UserDetail />,
    },
    {
      key: "2",
      label: "Chuẩn Đoán",
      children: <DiagnosisDetail />,
    },
    {
      key: "3",
      label: "Thuốc",
      children: <MedicineDetail />,
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
        pagination={{ pageSize: 15 }}
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      />

      <Drawer
        title="Chi tiết"
        width={1020}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={onClose}>
              Hủy
            </Button>
          </Space>
        }
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          tabBarStyle={{
            display: "flex",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#333",
            borderBottom: "2px solid #d9d9d9",
          }}
          size="large"
        />
      </Drawer>
    </div>
  );
};

export default ListPatient;
