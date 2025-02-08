import React, { useEffect } from "react";
import { Col, DatePicker, Form, Input, Row, Typography, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiagnosisDetail } from "../../store/diagnosisSlice";
import dayjs from "dayjs";

const { TextArea } = Input;
const { Title } = Typography;

function DiagnosisDetail() {
  const [form] = Form.useForm();
  const userID = useSelector((state) => state.USER.userDetail);
  const dataDiagnosis = useSelector(
    (state) => state.DIAGNOSIS.getDetailDiagnosis
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (userID?.userid) {
      dispatch(fetchDiagnosisDetail(userID.userid));
    }
  }, [dispatch, userID]);

  useEffect(() => {
    if (dataDiagnosis) {
      form.setFieldsValue({
        weight: dataDiagnosis.weight,
        height: dataDiagnosis.height,
        pulserate: dataDiagnosis.pulserate,
        temperature: dataDiagnosis.temperature,
        respirationrate: dataDiagnosis.respirationrate,
        bloodpressure: dataDiagnosis.bloodpressure,
        medicalhistory: dataDiagnosis.medicalhistory,
        clinicalsigns: dataDiagnosis.clinicalsigns,
        diagnosis: dataDiagnosis.diagnosis,
        resolution: dataDiagnosis.resolution,
        nextappointment: dataDiagnosis.nextappointment
          ? dayjs(dataDiagnosis.nextappointment)
          : null,
      });
    }
  }, [dataDiagnosis, form]);

  return (
    <Card
      style={{
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title
        level={3}
        style={{ textAlign: "center", marginBottom: "20px", color: "#454548" }}
      >
        Chuẩn đoán bệnh
      </Title>
      <Form
        layout="vertical"
        style={{ maxWidth: "800px", margin: "0 auto" }}
        form={form}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Cân nặng (kg)" name="weight">
              <Input placeholder="Nhập cân nặng" disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Chiều cao (m)" name="height">
              <Input placeholder="Nhập chiều cao" disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Mạch (nhịp/phút)" name="pulserate">
              <Input placeholder="Nhập mạch" disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Nhiệt độ (°C)" name="temperature">
              <Input placeholder="Nhập nhiệt độ" disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Nhịp thở (lần/phút)" name="respirationrate">
              <Input placeholder="Nhập nhịp thở" disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Huyết áp (mmHg)" name="bloodpressure">
              <Input placeholder="Nhập huyết áp" disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tiền sử bệnh" name="medicalhistory">
              <TextArea rows={3} placeholder="Nhập tiền sử bệnh" disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Triệu chứng lâm sàng" name="clinicalsigns">
              <TextArea
                rows={3}
                placeholder="Nhập triệu chứng lâm sàng"
                disabled
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Chẩn đoán" name="diagnosis">
          <Input placeholder="Nhập chẩn đoán" disabled />
        </Form.Item>
        <Form.Item label="Hướng giải quyết" name="resolution">
          <TextArea rows={3} placeholder="Nhập hướng giải quyết" disabled />
        </Form.Item>
        <Form.Item label="Ngày hẹn tiếp theo" name="nextappointment">
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Chọn ngày hẹn"
            disabled
          />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default DiagnosisDetail;
