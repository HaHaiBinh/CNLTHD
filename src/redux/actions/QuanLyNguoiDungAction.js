import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG_ADMIN,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import { message } from "antd";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      // thành công
      if (result.data.statusCode == 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        // chuyển hướng đăng nhập về trang trước đó
        history.push("/");
      }
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error.response.data);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      // thành công
      if (result.data.statusCode == 200) {
        dispatch({
          type: DANG_KY_ACTION,
          thongTinDangKy: result.data.content,
        });
        // chuyển hướng đăng nhập về trang đăng nhập
        history.push("/login");
      }
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      // thành công
      if (result.data.statusCode == 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }

      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error.response.data);
    }
  };
};

export const layDanhSachNguoiDungAction = (tuKhoa = "") => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(tuKhoa);
      // thành công
      if (result.data.statusCode == 200) {
        dispatch({
          type: SET_DANH_SACH_NGUOI_DUNG,
          danhSachNguoiDung: result.data.content,
        });
      }
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const themNguoiDungAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.themNguoiDung(formData);
      console.log("result: ", result.data.contentcontent);
      message.success("Thêm người dùng thành công");
      dispatch(layDanhSachNguoiDungAction);
      history.push("/admin/users");
    } catch (error) {
      console.log("error: ", error.response?.data);
      message.error(error.response?.data.content);
    }
  };
};

export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
      message.success("Xoá người dùng thành công");
      //   sau khi xóa load lại danh sách phim mới
      dispatch(layDanhSachNguoiDungAction());
    } catch (error) {
      console.log("error: ", error.response?.data);
      message.error(error.response?.data.content);
    }
  };
};

export const layThongTinNguoiDungAdminAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDungAdmin(
        taiKhoan
      );
      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG_ADMIN,
        thongTinNguoiDungAdmin: result.data.content,
      });
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
      message.error(error.response?.data.content);
    }
  };
};
