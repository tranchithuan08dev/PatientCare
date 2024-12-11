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
      <h2 className="text-center mb-4">Medicine Form</h2>
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
                label="Medicine Name"
                name="medicineName"
                rules={[
                  {
                    required: true,
                    message: "Please input the medicine name!",
                  },
                ]}
              >
                <Input placeholder="Enter medicine name" />
              </AntForm.Item>
            </div>
            <div className="col-md-3">
              <AntForm.Item
                label="Quantity"
                name="quantity"
                rules={[
                  { required: true, message: "Please input the quantity!" },
                ]}
              >
                <Input type="number" placeholder="Enter quantity" />
              </AntForm.Item>
            </div>
            <div className="col-md-3">
              <AntForm.Item
                label="Price per Unit"
                name="unitPrice"
                rules={[
                  {
                    required: true,
                    message: "Please input the price per unit!",
                  },
                ]}
              >
                <Input type="number" placeholder="Enter price per unit" />
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
