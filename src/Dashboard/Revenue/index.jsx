import { Button, Form, InputNumber, message, Select } from "antd";
import { CanvasJSChart } from "canvasjs-react-charts";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllPayment } from "../../store/paymentSlice";

const Revenue = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Tháng hiện tại
  const [year, setYear] = useState(new Date().getFullYear()); // Năm hiện tại

  function calculateMonthlyRevenue(data, month, year) {
    return data
      .filter((item) => {
        const date = new Date(item.paymentdate);
        return date.getMonth() + 1 === month && date.getFullYear() === year;
      })
      .reduce((total, item) => total + parseFloat(item.amount), 0);
  }

  const handleSubmit = () => {
    const revenue = calculateMonthlyRevenue(paymentData, month, year);
    message.success(`Doanh thu tháng ${month}/${year} là: ${revenue}`);
  };
  const paymentData = useSelector((state) => state.PAYMENT.payments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetAllPayment());
  }, []);

  // Prepare data points
  const dataPoints = paymentData.map((payment) => ({
    x: new Date(payment.paymentdate),
    y: parseFloat(payment.amount),
  }));

  const options = {
    animationEnabled: true,
    title: {
      text: "Bảng tống kết từng tháng",
    },
    axisY: {
      title: "Số Tiền (in VND)",
      prefix: "$",
    },
    axisX: {
      title: "Tiền theo tháng ",
      valueFormatString: "DD MMM YYYY",
    },
    data: [
      {
        type: "line",
        dataPoints: dataPoints,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        style={{
          maxWidth: 400,

          padding: "20px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form.Item label="Chọn tháng" required>
          <Select value={month} onChange={(value) => setMonth(value)}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <Option key={m} value={m}>
                Tháng {m}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Chọn năm" required>
          <InputNumber
            value={year}
            onChange={(value) => setYear(value)}
            min={2000}
            max={new Date().getFullYear()}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Tính doanh thu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Revenue;
