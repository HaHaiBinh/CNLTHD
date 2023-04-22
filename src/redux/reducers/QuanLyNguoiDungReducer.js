import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG_ADMIN,
} from "../actions/types/QuanLyNguoiDungType";

// // giá trị mặc định luôn lấy từ store ra : ktra store
let user = {};
// // // kiểm tra: nếu có tồn tại USER_LOGIN thì lấy ra làm giá trị mặc định để user khỏi đăng nhập lại
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  thongTinNguoiDung: {},
  danhSachNguoiDung: {},
  thongTinNguoiDungAdmin: {},
  userRegister: {},
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      // lấy thongTinDangNhap lưu vào action
      const { thongTinDangNhap } = action;
      // lưu thongTinDangNhap lên localStorage
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      // cập nhật userLogin: thongTinDangNhap
      return { ...state, userLogin: thongTinDangNhap };
    }

    case DANG_KY_ACTION: {
      // lấy thongTinDangKy lưu vào action
      const { thongTinDangKy } = action;
      // lưu thongTinDangKy lên localStorage
      //   localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangKy));
      return { ...state };
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }

    case SET_DANH_SACH_NGUOI_DUNG: {
      state.danhSachNguoiDung = action.danhSachNguoiDung;
      return { ...state };
    }

    case SET_THONG_TIN_NGUOI_DUNG_ADMIN: {
      state.thongTinNguoiDungAdmin = action.thongTinNguoiDungAdmin;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
