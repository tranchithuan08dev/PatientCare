import React from "react";
import { Form, Input, Radio, Select, DatePicker, Button } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;

function Patient() {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Nhập thông tin khám bệnh</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <h3>Nhập thông tin bệnh nhận:</h3>
        <div className="row">
          <div className="col-md-4">
            <Form.Item
              label="Họ tên"
              name="fullName"
              rules={[{ required: true, message: "Họ tên là bắt buộc" }]}
            >
              <Input placeholder="Họ tên bệnh nhân" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[{ required: true, message: "Giới tính là bắt buộc" }]}
            >
              <Radio.Group>
                <Radio value="male">Nam</Radio>
                <Radio value="female">Nữ</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item
              label="Ngày sinh"
              name="dob"
              rules={[{ required: true, message: "Ngày sinh là bắt buộc" }]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="Chọn ngày" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                { required: true, message: "Số điện thoại là bắt buộc" },
                { pattern: /^\d{10}$/, message: "Số điện thoại không hợp lệ" },
              ]}
            >
              <Input placeholder="Số điện thoại người liên lạc" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Người liên hệ" name="contactPerson">
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Địa chỉ" name="adress">
              <Input placeholder="Nhập địa chỉ" />
            </Form.Item>
          </div>
        </div>
        <Link to="/diagnosisForm">
          <Button type="primary">Tiếp Theo</Button>
        </Link>
      </Form>
    </div>
  );
}

export default Patient;
