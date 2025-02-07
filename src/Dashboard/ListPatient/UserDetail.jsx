import { Button, DatePicker, Form, Input, message, Radio } from "antd";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllUser, fetchUserUpdate } from "../../store/userSlice";

function UserDetail() {
  const [form] = Form.useForm();
  const userDetail = useSelector((state) => state.USER.userDetail);
  const dispatch = useDispatch();
  console.log("userDetail", userDetail);

  const calculateAge = (dob) => {
    return dayjs().diff(dayjs(dob), "year");
  };

  useEffect(() => {
    if (userDetail) {
      form.setFieldsValue({
        fullName: userDetail.fullname,
        gender: userDetail.gender?.toLowerCase(),
        dob: dayjs(userDetail.dateOfBirth),
        age: calculateAge(userDetail.dateOfBirth),
        phoneNumber: userDetail.phonenumber,
        address: userDetail.address,
      });
    }
  }, [userDetail, form]);

  // Function to handle form submission
  const onFinish = (values) => {
    const data = {
      id: userDetail.userid,
      fullName: values.fullName,
      gender: values.gender,
      dob: dayjs(values.dob).format("DD-MM-YYYY"),
      phoneNumber: values.phoneNumber,
      address: values.address,
    };
    dispatch(fetchUserUpdate(data))
      .then(() => {
        message.success("Chỉnh sửa bệnh nhân thành côngg!");
        dispatch(fetchGetAllUser());
      })
      .catch((error) => {
        message.error("Chỉnh sửa bệnh nhân thất bại!");
      });
  };

  return (
    <div
      style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <h3 style={{ marginBottom: "20px" }}>Thông tin bệnh nhân</h3>
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
              name="phoneNumber"
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
            Lưu Hồ Sơ
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UserDetail;
