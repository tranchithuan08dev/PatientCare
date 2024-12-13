import React from "react";
import { Form, Input, Radio, Select, DatePicker, Button } from "antd";

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
            <Form.Item
              label="Tỉnh/Thành"
              name="province"
              rules={[{ required: true, message: "Tỉnh/Thành là bắt buộc" }]}
            >
              <Select placeholder="Chọn tỉnh/thành">
                <Option value="TienGiang">Tiền Giang</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item
              label="Quận/Huyện"
              name="district"
              rules={[{ required: true, message: "Quận/Huyện là bắt buộc" }]}
            >
              <Select placeholder="Chọn quận/huyện">
                <Option value="CaiBe">Cái Bè</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Phường/Xã" name="ward">
              <Select placeholder="Chọn phường/xã">
                <Option value="XaDongHoaHiep">Xã Đông Hòa Hiệp</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Số nhà" name="houseNumber">
              <Input placeholder="Nhập địa chỉ nhà." />
            </Form.Item>
          </div>
          <h3> Chuẩn đoán:</h3>
          <div className="col-md-4">
            <Form.Item
              label="Cân nặng (kg)"
              name="weight"
              rules={[{ type: "number", message: "Nhập số hợp lệ" }]}
            >
              <Input placeholder="16.00" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Chiều cao (m)" name="height">
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item label="Triệu chứng lâm sàng" name="symptoms">
              <Input.TextArea rows={3} />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item label="Chẩn đoán" name="diagnosis">
              <Input placeholder="VPQ co thắt" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Cách giải quyết" name="solution">
              <Select placeholder="Chọn cách giải quyết">
                <Option value="prescription">Cấp toa và hẹn tái khám</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item label="Ngày hẹn" name="appointmentDate">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </div>
        </div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Patient;
