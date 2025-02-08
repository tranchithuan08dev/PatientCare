import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicineDetail } from "../../store/diagnosisSlice";

function MedicineDetail() {
  const userID = useSelector((state) => state.USER.userDetail);
  const dataDiagnosis = useSelector(
    (state) => state.DIAGNOSIS.getDetailMedicine
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (userID?.userid) {
      dispatch(fetchMedicineDetail(userID.userid));
    }
  }, [dispatch, userID?.userid]); // Ensure proper dependency tracking

  const data = dataDiagnosis.map((item) => ({
    key: item.diagnosisdetailid,
    medicinesname: item.medicinesname,
    morningdosage: item.morningdosage,
    afternoondosage: item.afternoondosage,
    eveningdosage: item.eveningdosage,
    nightdosage: item.nightdosage,
    days: item.days,
    quantity: item.quantity,
  }));

  const columns = [
    {
      title: "Tên Thuốc",
      dataIndex: "medicinesname",
      key: "medicinesname",
    },
    {
      title: "Sáng",
      dataIndex: "morningdosage",
      key: "morningdosage",
    },
    {
      title: "Trưa",
      dataIndex: "afternoondosage",
      key: "afternoondosage",
    },
    {
      title: "Chiều",
      dataIndex: "eveningdosage",
      key: "eveningdosage",
    },
    {
      title: "Tối",
      dataIndex: "nightdosage",
      key: "nightdosage",
    },
    {
      title: "Ngày",
      dataIndex: "days",
      key: "days",
    },
    {
      title: "Số Lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      locale={{ emptyText: "Không có dữ liệu để hiển thị." }}
    />
  );
}

export default MedicineDetail;
