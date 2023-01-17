import { useEffect, useState } from "react";

import { Table, Typography } from "antd";
import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { getItem, setItem } from "@/utils/localStorage";
import ModalAddUser from "@/components/modal/modalAddUser/ModalAddUser";
import ModalEditUser from "@/components/modal/modalEditUser/ModalEditUser";
import BackButton from "@/components/backButton/BackButton";
import { useAuthContext } from "@/hooks/useAuthContext";

const { Title } = Typography;
const { Column } = Table;
const iconStyle = {
  cursor: "pointer",
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const users = getItem(`arrimo-users-${user}`);
    if (users) {
      setUsers(users);
    }
  }, []);

  const handleAddNewUser = (userData) => {
    const checkOnMatch = users.find((el) => el.name === userData.name);
    const newUser = { ...userData, key: crypto.randomUUID() };
    if (checkOnMatch) {
      alert("A user with this name already exists");
      return;
    }
    setUsers((prev) => {
      prev.push(newUser);
      return [...prev];
    });

    const oldList = getItem(`arrimo-users-${user}`);
    if (!oldList) {
      setItem(`arrimo-users-${user}`, [newUser]);
      return;
    }

    const newList = [...oldList, newUser];

    setItem(`arrimo-users-${user}`, newList);
  };

  const handleDeleteUser = (key) => {
    setUsers((prev) => {
      return [...prev.filter((el) => el.key !== key)];
    });
    const oldList = getItem(`arrimo-users-${user}`);
    const newList = oldList.filter((el) => el.key !== key);
    setItem(`arrimo-users-${user}`, newList);
  };

  const handleEditUser = (user) => {
    const idxUpdatedUser = users.findIndex((el) => el.key === user.key);
    setUsers((prev) => {
      return [
        ...prev.slice(0, idxUpdatedUser),
        { ...user },
        ...prev.slice(idxUpdatedUser + 1),
      ];
    });
    const oldList = getItem(`arrimo-users-${user}`);
    const newList = [
      ...oldList.slice(0, idxUpdatedUser),
      { ...user },
      ...oldList.slice(idxUpdatedUser + 1),
    ];
    setItem(`arrimo-users-${user}`, newList);
  };

  return (
    <>
      <Title>Users</Title>
      <ModalAddUser addNewUser={handleAddNewUser} />
      <Table
        dataSource={users}
        pagination={false}
        style={{ width: "30%", margin: "15px" }}
      >
        <Column title="Name" dataIndex="name" key="name" align="center" />
        <Column title="Age" dataIndex="age" key="age" align="center" />
        <Column
          title="Action"
          key="action"
          align="center"
          render={(record) => {
            return (
              <Space size="middle">
                <ModalEditUser editUser={handleEditUser} user={record} />
                <DeleteOutlined
                  style={iconStyle}
                  onClick={() => handleDeleteUser(record.key)}
                />
              </Space>
            );
          }}
        />
      </Table>
      <BackButton />
    </>
  );
};

export default Users;
