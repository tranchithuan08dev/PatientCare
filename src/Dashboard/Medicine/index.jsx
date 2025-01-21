import React, { useState } from "react";
import {
  Button,
  Input,
  Form as AntForm,
  InputNumber,
  Typography,
  Row,
  Col,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function MedicineForm() {
  const [form] = AntForm.useForm();
  const [medicineData, setMedicineData] = useState(null);

  const onFinish = (values) => {
    setMedicineData(values);
    console.log("Form Data:", values);
  };

  return (
    <div className="container mt-5">
      <Title level={2} className="text-center mb-4">
        Nhập thông tin thuốc
      </Title>
      <div className="card p-4 shadow-sm">
        <Paragraph>
          <InfoCircleOutlined /> Hãy nhập đầy đủ thông tin thuốc bạn muốn nhập
          vào hệ thống. Các trường có dấu * là bắt buộc.
        </Paragraph>
        <AntForm
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col span={12}>
              <AntForm.Item
                label="Mã thuốc"
                name="medicine_id"
                rules={[{ required: true, message: "Bạn chưa nhập mã thuốc!" }]}
              >
                <Input placeholder="Nhập mã thuốc" />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                label="Tên thuốc"
                name="name"
                rules={[
                  { required: true, message: "Bạn chưa nhập tên thuốc!" },
                ]}
              >
                <Input placeholder="Nhập tên thuốc" />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <AntForm.Item
                label="Giá thuốc nhập vào"
                name="price_in"
                rules={[
                  { required: true, message: "Hãy nhập giá thuốc nhập vào!" },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  placeholder="Nhập giá thuốc nhập vào"
                />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                label="Giá thuốc bán ra"
                name="price_out"
                rules={[
                  { required: true, message: "Hãy nhập giá thuốc bán ra!" },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  placeholder="Nhập giá thuốc bán ra"
                />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <AntForm.Item
                label="Số lượng thuốc"
                name="quantity"
                rules={[
                  { required: true, message: "Hãy nhập số lượng thuốc!" },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  placeholder="Nhập số lượng thuốc"
                />
              </AntForm.Item>
            </Col>
            <Col span={12}>
              <AntForm.Item
                label="Hướng dẫn liều lượng"
                name="dosage_instructions"
                rules={[
                  { required: true, message: "Hãy nhập hướng dẫn liều lượng!" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Nhập hướng dẫn liều lượng"
                />
              </AntForm.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <AntForm.Item label="Mô tả thuốc" name="description">
                <Input.TextArea
                  rows={4}
                  placeholder="Nhập mô tả thuốc (tùy chọn)"
                />
              </AntForm.Item>
            </Col>
          </Row>

          <div className="text-center mt-3">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </AntForm>
      </div>

      {medicineData && (
        <div className="mt-4">
          <Title level={4}>Dữ liệu đã gửi:</Title>
          <pre>{JSON.stringify(medicineData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MedicineForm;
