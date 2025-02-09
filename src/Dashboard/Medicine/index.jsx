import React from "react";
import {
  Button,
  Input,
  Form,
  InputNumber,
  Typography,
  Row,
  Col,
  message,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { fetchCreateMedicine } from "../../store/medicineSlice";

const { Title, Paragraph } = Typography;

function MedicineForm() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (data) => {
    console.log("data", data);

    dispatch(fetchCreateMedicine(data))
      .then(() => {
        message.success("Bạn đã nhập thuốc thành công!");
        form.resetFields();
      })
      .catch((error) => {
        message.error("Xin Lỗi! Hãy nhập lại thuốc");
      });
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
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tên thuốc"
                name="medicinesName"
                rules={[
                  { required: true, message: "Bạn chưa nhập tên thuốc!" },
                  { min: 3, message: "Tên thuốc phải có ít nhất 3 ký tự!" },
                  {
                    max: 100,
                    message: "Tên thuốc không được vượt quá 100 ký tự!",
                  },
                ]}
              >
                <Input placeholder="Nhập tên thuốc" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Giá thuốc nhập vào"
                name="priceIn"
                rules={[
                  { required: true, message: "Hãy nhập giá thuốc nhập vào!" },
                  {
                    type: "number",
                    min: 1,
                    message: "Giá thuốc nhập phải lớn hơn 0!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Nhập giá thuốc nhập vào"
                  style={{ width: "100%" }} // Đảm bảo chiều dài giống nhau
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Giá thuốc bán ra"
                name="priceOut"
                rules={[
                  { required: true, message: "Hãy nhập giá thuốc bán ra!" },
                  {
                    type: "number",
                    min: 1,
                    message: "Giá thuốc bán phải lớn hơn 0!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Nhập giá thuốc bán ra"
                  style={{ width: "100%" }} // Đảm bảo chiều dài giống nhau
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Số lượng thuốc"
                name="quantity"
                rules={[
                  { required: true, message: "Hãy nhập số lượng thuốc!" },
                  {
                    type: "number",
                    min: 1,
                    message: "Số lượng phải lớn hơn 0!",
                  },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={1}
                  placeholder="Nhập số lượng thuốc"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Hướng dẫn liều lượng"
                name="dosageInstructions"
                rules={[
                  { required: true, message: "Hãy nhập hướng dẫn liều lượng!" },
                  {
                    max: 500,
                    message: "Hướng dẫn liều lượng không được quá 500 ký tự!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Nhập hướng dẫn liều lượng"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Mô tả thuốc"
                name="description"
                rules={[
                  { max: 1000, message: "Mô tả không được quá 1000 ký tự!" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Nhập mô tả thuốc (tùy chọn)"
                />
              </Form.Item>
            </Col>
          </Row>

          <div className="text-center mt-3">
            <Button type="primary" htmlType="submit">
              Tạo thuốc
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default MedicineForm;
