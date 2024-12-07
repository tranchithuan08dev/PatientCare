import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import "../assets/css/dashboard.css";
import {
  AreaChartOutlined,
  FormOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="dashboard-container">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="dashboard-sider"
      >
        <div className="dashboard-logo">Quản Lí Bệnh Nhân</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: "1",
              icon: <AreaChartOutlined />,
              label: (
                <Link to="/dashboard" className="dashboard-link">
                  Doanh Thu
                </Link>
              ),
            },
            {
              key: "2",
              icon: <FormOutlined />,
              label: (
                <Link to="/dashboard" className="dashboard-link">
                  Danh sách bệnh nhân
                </Link>
              ),
            },
            {
              key: "3",
              icon: <UserAddOutlined />,
              label: (
                <Link to="/dashboard" className="dashboard-link">
                  Khám bệnh
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className="dashboard-content">
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer className="dashboard-footer">
          Ant Design ©{new Date().getFullYear()} Created by PatientCare
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
