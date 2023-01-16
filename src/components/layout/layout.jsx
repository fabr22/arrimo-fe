import { Layout as AntLayout } from "antd";

const { Footer, Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <AntLayout>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          height: "calc(100vh - 67px)",
        }}
      >
        {children}
      </Content>
      <Footer style={{ color: "white", background: "#001529" }}>
        @2023 Arrimo
      </Footer>
    </AntLayout>
  );
};

export default Layout;
