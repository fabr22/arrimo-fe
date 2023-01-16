import { Button, Layout as AntLayout } from "antd";

const { Header, Footer, Content } = AntLayout;
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect, useState } from "react";

const LayoutWithHeader = ({ children }) => {
  const { user, signOut } = useAuthContext();

  const [userI, setUserI] = useState();
  useEffect(() => {
    setUserI(user);
  }, [user]);

  const handleLogout = () => {
    signOut();
  };
  return (
    <AntLayout>
      <Header
        style={{
          display: "flex",
          color: "white",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        {userI}
        <Button
          type="primary"
          onClick={handleLogout}
          style={{ marginLeft: "10px" }}
        >
          Logout
        </Button>
      </Header>
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
