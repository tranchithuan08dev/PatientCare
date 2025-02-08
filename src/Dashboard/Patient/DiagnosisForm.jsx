import React, { useEffect, useState } from "react";
import { Form, Input, Radio, DatePicker, Button, Row, Col } from "antd";
import MedicineForm from "./MedicinseForm"; // Ensure MedicineForm doesn't wrap in a <form> tag
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { fetchCreateDiagnosis } from "../../store/diagnosisSlice";
const { TextArea } = Input;

function DiagnosisForm() {
  const dataUser = useSelector((state) => state.USER.createUser);
  const [form] = Form.useForm();
  const [medicineData, setMedicineData] = useState([]);
  const [diagnosisData, setDiagnosisData] = useState({});
  const dispacth = useDispatch();

  console.log("medicineData", medicineData);
  console.log("diagnosisData", diagnosisData);

  const calculateAge = (dob) => {
    return dayjs().diff(dayjs(dob), "year");
  };

  useEffect(() => {
    if (dataUser) {
      form.setFieldsValue({
        fullName: dataUser.fullname,
        gender: dataUser.gender,
        dob: dayjs(dataUser.dateOfBirth),
        age: calculateAge(dataUser.dateOfBirth),
        phone: dataUser.phonenumber,
        address: dataUser.address,
      });
    }
  }, [dataUser, form]);

  const handleSaveDiagnosis = () => {
    form
      .validateFields()
      .then((values) => {
        const diagnosisdata = {
          pulserate: Number(values.pulserate),
          respirationrate: Number(values.respirationrate),
          bloodpressure: values.bloodpressure,
          height: Number(values.height),
          weight: Number(values.weight),
          temperature: Number(values.temperature),
          medicalhistory: values.medicalhistory,
          clinicalsigns: values.clinicalsigns,
          diagnosis: values.diagnosis,
          resolution: values.resolution,
          nextappointment: values.nextappointment
            ? dayjs(values.nextappointment).format("YYYY-MM-DD")
            : null,
        };

        setDiagnosisData(diagnosis); // Cập nhật dữ liệu
        const data = {
          diagnois: diagnosisdata,
          medicinesDetails: medicineData,
        };
        console.log("data111", data);

        dispacth(fetchCreateDiagnosis(data));
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
      });
  };

  return (
    <div
      style={{ padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[10, 28]}>
          {/* Patient Form */}
          <Col xs={24} md={8}>
            <h3 style={{ marginBottom: "20px" }}>Thông tin bệnh nhân</h3>
            <Form.Item label="Họ tên" name="fullName">
              <Input placeholder="Họ tên bệnh nhân" disabled />
            </Form.Item>
            <Form.Item label="Giới tính" name="gender">
              <Radio.Group disabled>
                <Radio value="male">Nam</Radio>
                <Radio value="female">Nữ</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Ngày sinh" name="dob">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Chọn ngày"
                disabled
              />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phone">
              <Input placeholder="Số điện thoại người liên lạc" disabled />
            </Form.Item>
            <Form.Item label="Tuổi" name="age">
              <Input placeholder="Tuổi" disabled />
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address">
              <TextArea rows={5} placeholder="Nhập địa chỉ" disabled />
            </Form.Item>
          </Col>

          {/* Diagnosis Form */}
          <Col xs={24} md={16}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Chuẩn đoán bệnh
            </h2>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Cân nặng (kg)" name="weight">
                  <Input placeholder="Nhập cân nặng" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Chiều cao (m)" name="height">
                  <Input placeholder="Nhập chiều cao" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Mạch (nhịp/phút)" name="pulserate">
                  <Input placeholder="Nhập mạch" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Nhiệt độ (°C)" name="temperature">
                  <Input placeholder="Nhập nhiệt độ" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Nhịp thở (lần/phút)" name="respirationrate">
                  <Input placeholder="Nhập nhịp thở" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Huyết áp (mmHg)" name="bloodpressure">
                  <Input placeholder="Nhập huyết áp" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Tiền sử bệnh" name="medicalhistory">
                  <TextArea rows={3} placeholder="Nhập tiền sử bệnh" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Triệu chứng lâm sàng" name="clinicalsigns">
                  <TextArea rows={3} placeholder="Nhập triệu chứng lâm sàng" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Chẩn đoán" name="diagnosis">
              <Input placeholder="Nhập chẩn đoán" />
            </Form.Item>
            <Form.Item label="Hướng giải quyết" name="resolution">
              <TextArea rows={3} placeholder="Nhập hướng giải quyết" />
            </Form.Item>
            <Form.Item label="Ngày hẹn tiếp theo" name="nextappointment">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Chọn ngày hẹn"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <MedicineForm onMedicineChange={setMedicineData} />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button type="primary" htmlType="submit" onClick={handleSaveDiagnosis}>
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default DiagnosisForm;
