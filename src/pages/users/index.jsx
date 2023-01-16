import { useState } from "react";

import { Table, Typography } from "antd";
import { Columns } from "./Columns";
import { data } from "./mock";

const { Title } = Typography;

const Users = () => {
  const [users, setUsers] = useState(data);
  return (
    <>
      <Title>Users</Title>
      <Table
        columns={Columns}
        dataSource={users}
        pagination={false}
        style={{ width: "70%" }}
      />
    </>
  );
};

export default Users;
