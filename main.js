// Bài 1
function tinhDiem(mon1, mon2, mon3, diemChuan, khuVuc, doiTuong) {
    var ketQua = "";
    var diem = mon1 + mon2 + mon3;
    // Đối tượng 1
    if (diem >= diemChuan && khuVuc == "A" && doiTuong == "1") {
        diem += 2 + 2.5;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    if (diem >= diemChuan && khuVuc == "B" && doiTuong == "1") {
        diem += 1 + 2.5;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    if (diem >= diemChuan && khuVuc == "C" && doiTuong == "1") {
        diem += 0.5 + 2.5;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    // Đối tượng 2
    if (diem >= diemChuan && khuVuc == "A" && doiTuong == "2") {
        diem += 2 + 1.5;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    if (diem >= diemChuan && khuVuc == "B" && doiTuong == "2") {
        diem += 1 + 1.5;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    if (diem >= diemChuan && khuVuc == "C" && doiTuong == "2") {
        diem += 0.5 + 1.5; 3
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    // Đối tượng 3
    if (diem >= diemChuan && khuVuc == "A" && doiTuong == "3") {
        diem += 2 + 1;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    if (diem >= diemChuan && khuVuc == "B" && doiTuong == "3") {
        diem += 1 + 1;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }
    if (diem >= diemChuan && khuVuc == "C" && doiTuong == "3") {
        diem += 0.5 + 1;
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }




    // rớt
    if (mon1 <= "0" || mon2 <= "0" || mon3 <= "0") {
        ketQua = "👉Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
        return ketQua;
    }
    if (diem >= diemChuan) {
        ketQua = "👉Bạn đã đậu. Tổng điểm: " + diem;
        return ketQua;
    }
    if (diem <= diemChuan) {
        ketQua = "👉Bạn đã rớt. Tổng điểm: " + diem;
        return ketQua;
    }

}
document.getElementById("timKetQua").onclick = function () {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var mon1 = document.getElementById("mon1").value * 1;
    var mon2 = document.getElementById("mon2").value * 1;
    var mon3 = document.getElementById("mon3").value * 1;
    var ketQua = tinhDiem(mon1, mon2, mon3, diemChuan, khuVuc, doiTuong);
    document.getElementById('thongBaoKetQua').innerHTML = ketQua;
}
// Bài 2
const KW_0_50 = 500;
const KW_50_100 = 650;
const KW_100_200 = 850;
const KW_200_350 = 1100;
const KW_350 = 1300;

function tinhTienDien(ten, soKw) {
    var format = new Intl.NumberFormat('vn-VN');
    var soKw;
    var tienKw = 0;
    var ketQua = "";
    if ("0" < soKw && soKw <= "50") {
        tienKw = soKw * KW_0_50;
        ketQua = "Họ tên :" + ten + ". " + "Tiền điện: " + format.format(tienKw);
        return ketQua;
    }
    if ("50" < soKw && soKw <= "100") {
        tienKw = (50 * KW_0_50) + ((soKw - 50) * KW_50_100);
        ketQua = "Họ tên :" + ten + ". " + "Tiền điện: " + format.format(tienKw);
        return ketQua;
    }
    if ("100" < soKw && soKw <= "200") {
        tienKw = (50 * KW_0_50) + (50 * KW_50_100) + ((soKw - 100) * KW_100_200);
        ketQua = "Họ tên :" + ten + ". " + "Tiền điện: " + format.format(tienKw);
        return ketQua;
    }
    if ("200" < soKw && soKw <= "350") {
        tienKw = (50 * KW_0_50) + (50 * KW_50_100) + (100 * KW_100_200) + ((soKw - 200) * KW_200_350);
        ketQua = "Họ tên :" + ten + ". " + "Tiền điện: " + format.format(tienKw);
        return ketQua;
    }
    if (soKw > "350") {
        tienKw = (50 * KW_0_50) + (50 * KW_50_100) + (100 * KW_100_200) + (150 * KW_200_350) + ((soKw - 350) * KW_350);
        ketQua = "Họ tên :" + ten + ". " + "Tiền điện: " + format.format(tienKw);
        return ketQua;
    }
}
document.getElementById("tinhTienDien").onclick = function () {
    var ten = document.getElementById("ten").value;
    var soKw = document.getElementById("soKw").value * 1;
    if (soKw <= 0) {
        alert("Số kw không hợp lệ! Vui lòng nhập lại");
    }
    var tienDien = tinhTienDien(ten, soKw);
    document.getElementById("thongBaoTienDien").innerHTML = tienDien;
}
// bài 3
const THUE_5_60 = 0.05;
const THUE_60_120 = 0.1;
const THUE_120_210 = 0.15;
const THUE_210_384 = 0.2;
const THUE_384_624 = 0.25;
const THUE_624_960 = 0.3;
const THUE_960UP = 0.35;
function tinhThue(tongThuNhap, soNguoi, ketQuaThue, hoTen) {
    var format = new Intl.NumberFormat('vn-VN');
    var ketQuaThue = "";
    var thuNhapChiuThue = 0;
    thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoi * 1600000);
    if ("5e+6" <= tongThuNhap && tongThuNhap < "60e+6" && thuNhapChiuThue > "0") {
        ketQuaThue = "Họ tên: " + hoTen + "; " + "Tiền thuế thu nhập cá nhân :" + format.format(thuNhapChiuThue * THUE_5_60) + " VND";
        return ketQuaThue;
    }
    if ("60e+6" <= tongThuNhap && tongThuNhap <= "120e+6" && thuNhapChiuThue > "0") {
        ketQuaThue = "Họ tên: " + hoTen + "; " + "Tiền thuế thu nhập cá nhân :" + format.format(thuNhapChiuThue * THUE_60_120) + " VND";
        return ketQuaThue;
    }
    if ("120e+6" <= tongThuNhap && tongThuNhap <= "210e+6" && thuNhapChiuThue > "0") {
        ketQuaThue = "Họ tên: " + hoTen + "; " + "Tiền thuế thu nhập cá nhân :" + format.format(thuNhapChiuThue * THUE_120_210) + " VND";
        return ketQuaThue;
    }
    if ("210e+6" <= tongThuNhap && tongThuNhap <= "384e+6" && thuNhapChiuThue > "0") {
        ketQuaThue = "Họ tên: " + hoTen + "; " + "Tiền thuế thu nhập cá nhân :" + format.format(thuNhapChiuThue * THUE_210_384) + " VND";
        return ketQuaThue;
    }
    if ("384e+6" <= tongThuNhap && tongThuNhap <= "624e+6" && thuNhapChiuThue > "0") {
        ketQuaThue = "Họ tên: " + hoTen + "; " + "Tiền thuế thu nhập cá nhân :" + format.format(thuNhapChiuThue * THUE_384_624) + " VND";
        return ketQuaThue;
    }
    if ("624e+6" <= tongThuNhap && tongThuNhap <= "960e+6" && thuNhapChiuThue > "0") {
        ketQuaThue = "Họ tên: " + hoTen + "; " + "Tiền thuế thu nhập cá nhân :" + format.format(thuNhapChiuThue * THUE_624_960) + " VND";
        return ketQuaThue;
    }
    if ("960e+6" <= tongThuNhap && thuNhapChiuThue > "0") {
        ketQuaThue = "Họ tên: " + hoTen + "; " + "Tiền thuế thu nhập cá nhân :" + format.format(thuNhapChiuThue * THUE_960UP) + " VND";
        return ketQuaThue;
    }
    if (tongThuNhap < "5e+6" || thuNhapChiuThue < "0") {
        alert("Số tiền thu nhập không hợp lệ!")
    }

}
document.getElementById("tinhTienThue").onclick = function () {
    // input
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var soNguoi = document.getElementById("soNguoi").value * 1;
    // xử lý
    var tienThue = tinhThue(tongThuNhap, soNguoi, hoTen);
    // output
    document.getElementById("thongBaoTienThue").innerHTML = tienThue;
}
// bài 4
function myFunction() {
    var x = document.getElementById("mySelect").value;
    var thongBaoX = "";
    if (x == "doanhNghiep") {
        thongBaoX = "Số kết nối: " + "<input id='soKetNoi'>" + "</input>";
        document.getElementById("ketNoi").innerHTML = thongBaoX;
    }
    else {
        document.getElementById("ketNoi").innerHTML = thongBaoX;
    }
}
const NHADAN_1 = 4.5;
const NHADAN_2 = 20.5;
const NHADAN_3 = 7.5;
const KHACHHANG_1 = 15;
const KHACHHANG_2 = 75;
const KHACHHANG_3 = 50;
function tinhTienCap(maKhachHang, soKenhCaoCap, loaiKhachHang, soKetNoi) {
    var ketQuaTienCap = "";
    var tienCapNhaDan = NHADAN_1 + NHADAN_2 + (NHADAN_3 * soKenhCaoCap);
    var tienCapKhachHang = KHACHHANG_1 + KHACHHANG_2 + (KHACHHANG_3 * soKenhCaoCap);
    var tienCapKhachHangCc = KHACHHANG_1 + (KHACHHANG_2 + ((soKetNoi - 10) * 5)) + (KHACHHANG_3 * soKenhCaoCap);
    if (loaiKhachHang == "nhaDan") {
        ketQuaTienCap = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + tienCapNhaDan;
        return ketQuaTienCap;
    }
    if (loaiKhachHang = "doanhNghiep" && soKetNoi <= "10") {
        ketQuaTienCap = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + tienCapKhachHang;
        return ketQuaTienCap;
    }
    if (loaiKhachHang = "doanhNghiep" && soKetNoi > "10") {
        ketQuaTienCap = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + tienCapKhachHangCc;
        return ketQuaTienCap;
    }
}
document.getElementById("tinhTienCap").onclick = function () {
    // input
    var loaiKhachHang = document.getElementById("mySelect").value;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    // xử lý
    var tienCap = tinhTienCap(maKhachHang, soKenhCaoCap, loaiKhachHang, soKetNoi);
    // output
    document.getElementById("thongBaoTienCap").innerHTML = tienCap;

}
