import React, { useEffect } from "react";
import { Form, Input, Radio, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function Patient() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.USER.userDetail);
  const [form] = Form.useForm();
  console.log("usserdata", dataUser);

  const onFinish = (values) => {
    const data = {
      fullName: values.fullName,
      gender: values.gender,
      dateOfBirth: values.dob?.format("YYYY-MM-DD"),
      phoneNumber: values.phone,
      address: values.address,
      createat: dayjs().format("YYYY-MM-DD"),
      role: "Patient",
    };

    dispatch(fetchCreateUser(data)).then(() => {
      navigate("/diagnosisForm");
    });
  };

  useEffect(() => {
    if (dataUser) {
      form.setFieldsValue({
        fullName: dataUser.fullname,
        gender: dataUser.gender,
        dob: dayjs(dataUser.dateOfBirth),
        phone: dataUser.phonenumber,
        address: dataUser.address,
      });
    }
  }, [dataUser, form]);

  return (
    <div
      style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Nhập thông tin khám bệnh
      </h2>
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
            <Form.Item label="Địa chỉ" name="address">
              <Input.TextArea rows={4} placeholder="Nhập địa chỉ" />
            </Form.Item>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button type="primary" htmlType="submit">
            Tiếp Theo
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Patient;
