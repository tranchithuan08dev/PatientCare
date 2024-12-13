import React, { useState } from "react";
import { Button, Input, Form as AntForm } from "antd";
function Medicine() {
  const [form] = AntForm.useForm();
  const [medicineData, setMedicineData] = useState(null);

  const onFinish = (values) => {
    setMedicineData(values);
    console.log("Form Data:", values);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Nhập tên thuốc</h2>
      <div className="card p-4 shadow-sm">
        <AntForm
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="row">
            <div className="col-md-6">
              <AntForm.Item
                label="Tên loại thuốc"
                name="medicineName"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập thuốc!",
                  },
                ]}
              >
                <Input placeholder="Nhập tên thuốc" />
              </AntForm.Item>
            </div>
            <div className="col-md-3">
              <AntForm.Item
                label="Số lượng thuốc nhập vào "
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập số lượng thuốc của bạn !",
                  },
                ]}
              >
                <Input type="number" placeholder="Nhập số lượng thuốc " />
              </AntForm.Item>
            </div>
            <div className="col-md-3">
              <AntForm.Item
                label="Giá thuốc nhập vào"
                name="unitPrice"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập giá tiền thuốc của bạn !",
                  },
                ]}
              >
                <Input type="number" placeholder="Nhập giá tiền nhập vào " />
              </AntForm.Item>
            </div>
            <div className="col-md-3">
              <AntForm.Item
                label="Giá thuốc bán ra"
                name="unitPrice"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập giá tiền thuốc của bạn !",
                  },
                ]}
              >
                <Input type="number" placeholder="Nhập giá tiền thuốc bán ra" />
              </AntForm.Item>
            </div>
          </div>
          <div className="text-center mt-3">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </AntForm>
      </div>

      {medicineData && (
        <div className="mt-4">
          <h4>Submitted Data:</h4>
          <pre>{JSON.stringify(medicineData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Medicine;
