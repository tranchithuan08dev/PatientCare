import React, { useState } from "react";
import {
  Button,
  Table,
  Tag,
  Drawer,
  Form,
  Input,
  Row,
  Col,
  Select,
  DatePicker,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const ListMedicine = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Tên Thuốc",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số Lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá Nhập Vào",
      dataIndex: "priceIn",
      key: "priceIn",
    },
    {
      title: "Giá Bán Ra",
      dataIndex: "priceOut",
      key: "priceOut",
    },
    {
      title: "Cảnh Báo",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            const color = tag === "hết hàng" ? "volcano" : "green";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Chỉnh Sửa",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={showDrawer} className="mb-3">
          Edit
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Paracetamol",
      quantity: 50,
      priceIn: "2,000 VND",
      priceOut: "5,000 VND",
      tags: ["còn hàng"],
    },
    {
      key: "2",
      name: "Vitamin C",
      quantity: 0,
      priceIn: "3,000 VND",
      priceOut: "6,000 VND",
      tags: ["hết hàng"],
    },
    {
      key: "3",
      name: "Ibuprofen",
      quantity: 20,
      priceIn: "10,000 VND",
      priceOut: "15,000 VND",
      tags: ["còn hàng"],
    },
  ];

  return (
    <div>
      <h2 className="mb-4 text-center">Danh Sách Thuốc</h2>

      <Table columns={columns} dataSource={data} />

      <Drawer
        title="Thêm Thuốc Mới"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Hủy</Button>
            <Button type="primary" onClick={onClose}>
              Lưu
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên Thuốc"
                rules={[{ required: true, message: "Vui lòng nhập tên thuốc" }]}
              >
                <Input placeholder="Tên thuốc" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="quantity"
                label="Số Lượng"
                rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}
              >
                <Input type="number" placeholder="Số lượng" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="priceIn"
                label="Giá Nhập Vào"
                rules={[
                  { required: true, message: "Vui lòng nhập giá nhập vào" },
                ]}
              >
                <Input placeholder="Giá nhập vào" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="priceOut"
                label="Giá Bán Ra"
                rules={[
                  { required: true, message: "Vui lòng nhập giá bán ra" },
                ]}
              >
                <Input placeholder="Giá bán ra" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Mô Tả"
                rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
              >
                <Input.TextArea rows={4} placeholder="Mô tả thuốc" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default ListMedicine;
