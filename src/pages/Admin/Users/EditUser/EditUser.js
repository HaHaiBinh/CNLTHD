import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { GROUP_ID } from "../../../../util/settings/config";
import { Form, Input, InputNumber, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  layThongTinNguoiDungAction,
  layThongTinNguoiDungAdminAction,
} from "../../../../redux/actions/QuanLyNguoiDungAction";

const EditUser = (props) => {
  const dispatch = useDispatch();
  const { thongTinNguoiDungAdmin } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  console.log("thongTinNguoiDungAdmin: ", thongTinNguoiDungAdmin);

  //   useEffect(() => {
  //     return () => {
  //       let { taiKhoan } = props.match.params;
  //       //   dispatch(layThongTinNguoiDungAdminAction(taiKhoan));
  //     };
  //   }, []);

  const formik = useFormik({
    enableReinitialize: true, // thuộc tính chỉ dùng trong edit (formik) để edit formData
    initialValues: {
      taiKhoan: thongTinNguoiDungAdmin.taiKhoan,
      matKhau: "",
      hoTen: "",
      email: "",
      maLoaiNguoiDung: "",
      soDt: "",
      maNhom: GROUP_ID,
    },
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [email, setEmail] = useState("");
  const [soDt, setSoDt] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [maLoaiNguoiDung, setMaLoaiNguoiDung] = useState("KhachHang");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      hoTen,
      maLoaiNguoiDung,
      maNhom: GROUP_ID,
    };
    console.log("user: ", user);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onSubmitCapture={handleSubmit}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tài khoản">
        <Input
          value={taiKhoan}
          onChange={(e) => {
            setTaiKhoan(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Mật khẩu">
        <Input.Password
          value={matKhau}
          onChange={(e) => {
            setMatKhau(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          style={{ width: 200 }}
          value={soDt}
          onChange={(e) => {
            setSoDt(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Họ tên">
        <Input
          value={hoTen}
          onChange={(e) => {
            setHoTen(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Loại khách hàng">
        <select
          style={{ width: 200, height: 40 }}
          value={maLoaiNguoiDung}
          onChange={(e) => {
            setMaLoaiNguoiDung(e.target.value);
          }}
        >
          <option value="KhachHang">Khách hàng </option>
          <option value="QuanTri">Quản trị</option>
        </select>
      </Form.Item>

      <Form.Item label="Button">
        <button type="submit" className="bg-blue-500 text-white p-2">
          Chỉnh sửa người dùng
        </button>
      </Form.Item>
    </Form>
  );
};

export default EditUser;
