const convertVND = (data) => {
  const vnd = new Intl.NumberFormat("vi-VN").format(data);
  return vnd.replace(/\./g, ",");
};

export default convertVND;
