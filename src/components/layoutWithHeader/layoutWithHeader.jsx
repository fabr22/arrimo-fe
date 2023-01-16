import { Layout as AntLayout } from "antd";

const { Header, Footer, Content } = AntLayout;
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect, useState } from "react";

const LayoutWithHeader = ({ children }) => {
  const { user } = useAuthContext();

  const [userI, setUserI] = useState();
  useEffect(() => {
    setUserI(user);
  }, [user]);

  return (
    <AntLayout>
      <Header style={{ color: "white" }}>{userI}</Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          height: "calc(100vh - 131px)",
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

export default LayoutWithHeader;
