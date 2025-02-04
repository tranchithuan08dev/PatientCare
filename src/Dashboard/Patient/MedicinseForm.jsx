import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Select, Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicineDetail, fetchMedicines } from "../../store/medicineSlice";

const { Option } = Select;

function MedicineForm({ onMedicineChange }) {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityMedicine, setQuantityMedicine] = useState(0);
  const [medicineId, setMedicineId] = useState();
  const dispacth = useDispatch();
  const medicineData = useSelector((state) => state.MEDICINE.medicines);
  const medicineDataDetail = useSelector(
    (state) => state.MEDICINE.medicineDetail
  );
  console.log("medicineDataDetail", medicineDataDetail);

  console.log("dataSource", dataSource);
  // console.log("medicineData", medicineData);
  useEffect(() => {
    dispacth(fetchMedicines());
  }, []);
  const columns = [
    {
      title: "Xóa",
      dataIndex: "delete",
      key: "delete",
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDelete(record.key)}>
          X
        </Button>
      ),
    },
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên Thuốc",
      dataIndex: "medicineName",
      key: "medicineName",
    },
    {
      title: "Đơn vị tính",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Sáng",
      dataIndex: "morningDosage",
      key: "morningDosage",
    },
    {
      title: "Trưa",
      dataIndex: "afternoonDosage",
      key: "afternoonDosage",
    },
    {
      title: "Chiều",
      dataIndex: "eveningDosage",
      key: "eveningDosage",
    },
    {
      title: "Tối",
      dataIndex: "nightDosage",
      key: "nightDosage",
    },
    {
      title: "Số ngày",
      dataIndex: "days",
      key: "days",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Đường dùng",
      dataIndex: "usageInstructions",
      key: "usageInstructions",
    },
    {
      title: "Ghi chú",
      dataIndex: "notes",
      key: "notes",
    },
  ];

  const handleAdd = async (values) => {
    console.log("handle Add", values);
    const result = await dispacth(
      fetchMedicineDetail(values.medicineName)
    ).unwrap(); // Use unwrap if you're using Redux Toolkit

    const medicineDetail = result || {}; // Ensure a default fallback
    if (!medicineDetail) {
      console.error("Failed to fetch medicine details");
      return;
    }

    const quantity = values.quantity;
    const handleAddData = {
      medicineId: medicineDetail.medicinesid,
      medicineName: medicineDetail.medicinesname,
      afternoonDosage: values.afternoonDosage,
      days: values.days,
      eveningDosage: values.eveningDosage,
      morningDosage: values.morningDosage,
      nightDosage: values.nightDosage,
      notes: values.notes,
      price: quantity * medicineDetail.priceout,
      quantity: values.quantity,
      unit: values.unit,
      usageInstructions: values.usageInstructions,
    };

    const newData = {
      key: dataSource.length + 1,
      index: dataSource.length + 1,
      ...handleAddData,
    };
    setDataSource([...dataSource, newData]);
    setTotalPrice(totalPrice + handleAddData.price);
    form.resetFields();
  };
  const handleDelete = (key) => {
    const updatedDataSource = dataSource.filter((item) => item.key !== key);
    const deletedItem = dataSource.find((item) => item.key === key);
    setTotalPrice(totalPrice - deletedItem.price * deletedItem.quantity);
    setDataSource(updatedDataSource);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Toa Thuốc</h2>
      <Form
        form={form}
        layout="inline"
        onFinish={handleAdd}
        style={{
          marginBottom: "16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "space-between",
        }}
      >
        <Form.Item
          name="medicineName"
          rules={[{ required: true, message: "Vui lòng chọn thuốc" }]}
          style={{ flex: "1 1 220px" }}
        >
          <Select placeholder="Tên thuốc" style={{ width: "100%" }}>
            {medicineData.map((medicine, index) => (
              <Option key={medicine.medicinesid} value={medicine.medicinesid}>
                {medicine.medicinesname}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="unit"
          rules={[{ required: true, message: "Vui lòng nhập đơn vị tính" }]}
          style={{ flex: "1 1 150px" }}
        >
          <Input placeholder="Đơn vị tính" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="morningDosage" style={{ flex: "1 1 100px" }}>
          <InputNumber
            min={0}
            step={0.1}
            placeholder="Sáng"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item name="afternoonDosage" style={{ flex: "1 1 100px" }}>
          <InputNumber
            min={0}
            step={0.1}
            placeholder="Trưa"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item name="eveningDosage" style={{ flex: "1 1 100px" }}>
          <InputNumber
            min={0}
            step={0.1}
            placeholder="Chiều"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item name="nightDosage" style={{ flex: "1 1 100px" }}>
          <InputNumber
            min={0}
            step={0.1}
            placeholder="Tối"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="days"
          rules={[{ required: true, message: "Vui lòng nhập số ngày" }]}
          style={{ flex: "1 1 100px" }}
        >
          <InputNumber
            min={1}
            placeholder="Số ngày"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="quantity"
          rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}
          style={{ flex: "1 1 120px" }}
        >
          <InputNumber
            min={1}
            placeholder="Số lượng"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item name="usageInstructions" style={{ flex: "1 1 150px" }}>
          <Input placeholder="Đường dùng" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="notes" style={{ flex: "1 1 150px" }}>
          <Input placeholder="Ghi chú" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item style={{ flex: "1 1 100px" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              borderRadius: "4px",
              padding: "10px 20px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#40a9ff")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1890ff")}
          >
            Thêm
          </Button>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={false}
        style={{ marginTop: "16px" }}
      />
      <div className="text-right mt-2">
        <h4>Tổng tiền: {totalPrice.toLocaleString()} VND</h4>
      </div>
    </div>
  );
}

export default MedicineForm;
