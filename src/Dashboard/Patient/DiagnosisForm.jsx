import React from "react";
import { Form, Input, Radio, DatePicker, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import MedicineForm from "./MedicinseForm";

const { TextArea } = Input;

function DiagnosisForm() {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div
      style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}
    >
      <Row gutter={[16, 16]}>
        {/* Patient Form */}
        <Col xs={24} md={12}>
          <Form layout="vertical" onFinish={onFinish}>
            <h3 style={{ marginBottom: "20px" }}>Nhập thông tin bệnh nhân:</h3>
            <Form.Item
              label="Họ tên"
              name="fullName"
              rules={[{ required: true, message: "Họ tên là bắt buộc" }]}
            >
              <Input placeholder="Họ tên bệnh nhân" />
            </Form.Item>
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
            <Form.Item
              label="Ngày sinh"
              name="dob"
              rules={[{ required: true, message: "Ngày sinh là bắt buộc" }]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="Chọn ngày" />
            </Form.Item>
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
            <Form.Item label="Người liên hệ" name="contactPerson">
              <Input placeholder="Nhập tên người liên hệ" />
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address">
              <Input placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Form>
        </Col>

        {/* Diagnosis Form */}
        <Col xs={24} md={12}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Chuẩn đoán bệnh
          </h2>
          <Form layout="vertical">
            <Form.Item
              label="Cân nặng (kg)"
              name="weight"
              rules={[{ type: "number", message: "Nhập số hợp lệ" }]}
            >
              <Input placeholder="Nhập cân nặng" />
            </Form.Item>
            <Form.Item label="Chiều cao (m)" name="height">
              <Input placeholder="Nhập chiều cao" />
            </Form.Item>
            <Form.Item label="Triệu chứng lâm sàng" name="symptoms">
              <TextArea rows={5} placeholder="Nhập triệu chứng lâm sàng" />
            </Form.Item>
            <Form.Item label="Chẩn đoán" name="diagnosis">
              <Input placeholder="Nhập chẩn đoán" />
            </Form.Item>

            <Form.Item label="Ngày hẹn" name="appointmentDate">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Chọn ngày hẹn"
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <MedicineForm />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/nextStep">
          <Button type="primary">Tiếp Theo</Button>
        </Link>
      </div>
    </div>
  );
}

export default DiagnosisForm;
