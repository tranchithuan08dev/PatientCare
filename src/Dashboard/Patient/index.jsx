import React from "react";
import { Form, Input, Radio, Select, DatePicker, Button } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;

function Patient() {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div
      style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Nhập thông tin khám bệnh
      </h2>
      <Form layout="vertical" onFinish={onFinish}>
        <h3 style={{ marginBottom: "20px" }}>Nhập thông tin bệnh nhân:</h3>
        <div className="row" style={{ gap: "16px" }}>
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
              <Input placeholder="Nhập tên người liên hệ" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Địa chỉ" name="address">
              <Input placeholder="Nhập địa chỉ" />
            </Form.Item>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/diagnosisForm">
            <Button type="primary">Tiếp Theo</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Patient;
