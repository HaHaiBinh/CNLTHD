import React from "react";
import { Button, Table } from "antd";
import { Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import { layDanhSachNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";
export default function Films() {
  const { danhSachNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const dispatch = useDispatch();
  console.log("danhSachNguoiDung: ", danhSachNguoiDung);
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  //   const columns = [
  //     {
  //       title: "Tài khoản",
  //       dataIndex: "taiKhoan",
  //       sorter: (a, b) => {
  //         let taiKhoanA = a.taiKhoan.toLowerCase().trim();
  //         let taiKhoanB = b.taiKhoan.toLowerCase().trim();
  //         if (taiKhoanA > taiKhoanB) {
  //           return 1;
  //         }
  //         return -1;
  //       },
  //       sortDirections: ["ascend", "descend"],
  //       width: 250,
  //     },
  //     {
  //       title: "Họ tên",
  //       dataIndex: "hoTen",
  //       sorter: (a, b) => {
  //         let hoTenA = a.hoTen.toLowerCase().trim();
  //         let hoTenB = b.hoTen.toLowerCase().trim();
  //         if (hoTenA > hoTenB) {
  //           return 1;
  //         }
  //         return -1;
  //       },
  //       sortDirections: ["ascend", "descend"],
  //       width: 250,
  //     },

  //     {
  //       title: "Email",
  //       dataIndex: "email",
  //       width: 250,
  //     },
  //     {
  //       title: "Loại người dùng",
  //       dataIndex: "maLoaiNguoiDung",
  //       width: 250,
  //     },
  //     {
  //       title: "Thao tác",
  //       dataIndex: "taiKhoan",
  //       render: (text, user) => {
  //         return (
  //           <Fragment>
  //             <NavLink
  //               key={1}
  //               className="mr-2 text-2xl"
  //               to={`/admin/user/edit/${user.taiKhoan}`}
  //             >
  //               <EditOutlined style={{ color: "blue" }} />
  //             </NavLink>
  //             <span
  //               key={2}
  //               className="text-2xl"
  //               style={{ cursor: "pointer" }}
  //               onClick={() => {
  //                 console.log("delete");
  //               }}
  //             >
  //               <DeleteOutlined style={{ color: "red" }} />
  //             </span>
  //           </Fragment>
  //         );
  //       },
  //     },
  //   ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const { Search } = Input;
  const onSearch = (value) => {
    // console.log(value); -> value = tenPhim
    // gọi api layDanhSachPhim
    // dispatch(layDanhSachPhimAction(value));
  };

  return (
    <div className="container">
      <h3 className="text-2xl">Quản lý người dùng</h3>
      <Button
        className="mb-5"
        onClick={() => {
          history.push("/admin/users/addnewuser");
        }}
      >
        Thêm người dùng
      </Button>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"taiKhoan"}
      />
    </div>
  );
}
