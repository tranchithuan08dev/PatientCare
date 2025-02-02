import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  Tag,
  Drawer,
  Form,
  Input,
  Row,
  Col,
  Space,
  message,
} from "antd";
import {
  fetchMedicineDetail,
  fetchMedicines,
  fetchUpdateMedicine,
} from "../../store/medicineSlice";
import { useDispatch, useSelector } from "react-redux";

const ListMedicine = () => {
  const [open, setOpen] = useState(false);
  const [medicineId, setMedicineId] = useState();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const medicineData = useSelector((state) => state.MEDICINE.medicines);
  const medicineDataDetail = useSelector(
    (state) => state.MEDICINE.medicineDetail
  );

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  useEffect(() => {
    if (medicineDataDetail) {
      form.setFieldsValue({
        medicineName: medicineDataDetail.medicinesname,
        quantity: medicineDataDetail.quantity,
        priceIn: medicineDataDetail.pricein,
        priceOut: medicineDataDetail.priceout,
        description: medicineDataDetail.description,
        dosageinstructions: medicineDataDetail.dosageinstructions,
      });
    }
  }, [medicineDataDetail, form]);

  const showDrawer = (medicineId) => {
    setOpen(true);
    dispatch(fetchMedicineDetail(medicineId));
    setMedicineId(medicineId), console.log("id", medicineId);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Tên Thuốc",
      dataIndex: "medicinesname",
      key: "medicinesname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số Lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá Nhập Vào",
      dataIndex: "priceIn",
      key: "priceIn",
    },
    {
      title: "Giá Bán Ra",
      dataIndex: "priceOut",
      key: "priceOut",
    },
    {
      title: "Cảnh Báo",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            const color = tag === "hết hàng" ? "volcano" : "green";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Chỉnh Sửa",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => showDrawer(record.key)}
          className="mb-3"
        >
          Edit
        </Button>
      ),
    },
  ];

  const data = medicineData.map((item) => ({
    key: item.medicinesid,
    medicinesname: item.medicinesname,
    quantity: item.quantity,
    priceIn: item.pricein,
    priceOut: item.priceout,
    tags: item.quantity > 0 ? ["còn hàng"] : ["hết hàng"],
  }));

  //Update
  const submitForm = (values) => {
    console.log("values", values);
    const data = {
      id: medicineId,
      medicinesName: values.medicineName,
      priceIn: values.priceIn,
      priceOut: values.priceOut,
      quantity: values.quantity,
      description: values.description,
      dosageInstructions: values.dosageinstructions,
    };
    console.log("data", data);

    dispatch(fetchUpdateMedicine(data))
      .then(() => {
        message.success("Medicine updated successfully!");
        setOpen(false);
        dispatch(fetchMedicines());
      })
      .catch((error) => {
        message.error("Failed to update medicine. Please try again.");
        console.error(error);
      });
  };
  return (
    <div>
      <h2 className="mb-4 text-center">Danh Sách Thuốc</h2>

      <Table columns={columns} dataSource={data} />

      <Drawer
        title="Thêm Thuốc Mới"
        width={720}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={onClose}>
              Hủy
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={(values) => submitForm(values)}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="medicineName"
                label="Tên Thuốc"
                rules={[{ required: true, message: "Vui lòng nhập tên thuốc" }]}
              >
                <Input placeholder="Tên thuốc" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="quantity"
                label="Số Lượng"
                rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}
              >
                <Input type="number" placeholder="Số lượng" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="priceIn"
                label="Giá Nhập Vào"
                rules={[
                  { required: true, message: "Vui lòng nhập giá nhập vào" },
                ]}
              >
                <Input placeholder="Giá nhập vào" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="priceOut"
                label="Giá Bán Ra"
                rules={[
                  { required: true, message: "Vui lòng nhập giá bán ra" },
                ]}
              >
                <Input placeholder="Giá bán ra" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Mô Tả"
                rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
              >
                <Input.TextArea rows={4} placeholder="Mô tả thuốc" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="dosageinstructions"
                label="Liều Dùng"
                rules={[{ required: true, message: "Mô tả mõi khi sự dụng" }]}
              >
                <Input.TextArea rows={4} placeholder="Mô tả thuốc" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item wrapperCol={{ offset: 9 }}>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default ListMedicine;
