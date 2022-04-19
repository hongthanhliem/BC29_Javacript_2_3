/**
 * Bai 1:
 * Đầu vào
 * + Tính tiền lương nhân viên
 * + Lương 1 ngày: 100000
 * + Nhập số ngày làm 
 * + Công thức tính: Lương 1 ngày * số ngày làm
 * Xử lý
 * + var a; số tiền lương nhân viên
 * + var luong 1 ngày = 100000;
 * + var b; số ngày làm
 * + Var a = lương 1 ngày * b;
 * Đầu ra
 * + show ra tiền lương
 */

 document.getElementById("btnTinh").onclick = function(){
    //Lấy value từ người dùng nhập
    var Luong1Ngay = document.getElementById("txtTongTien").value;
    var SoNgayLam = document.getElementById("txtSoNgayLam").value;
    var TongLuong = Luong1Ngay * SoNgayLam;
   
    var result = "Tong Luong: " + TongLuong ;
    console.log(TongLuong);

    //Đầu ra : dom toi #footerTip show kết quả
    document.getElementById("footerTip").innerHTML = result;
    document.getElementById("footerTip").classList.add("alert-success");


};



/**
 * Bai 2
 * Đầu vào
 * + Nhập vào 5 số thực
 * + Tính giá trị trung bình của 5 số
 * Xử lý
 * + Chọn ra số thực có giá trị trung bình chia hết cho 5
 * + var a = 3;
 * + var b = 5;
 * var giatritrungbinh = a % b;
 * Đầu ra
 * + show kết quả
 * 
 */


 document.getElementById("btnGiaTri").onclick = function(){
    //Lấy value từ người dùng nhập
    var a = document.getElementById("txtSoThucA").value;
    var b = document.getElementById("txtSoThucB").value;
    var sel5 = document.getElementById("select5").value;
    var giatritrungbinh = (a % b) ;
   
    var result = "Chia het cho 5: " + giatritrungbinh;
    console.log(giatritrungbinh);

    //Đầu ra : dom toi #footerTip show kết quả
    document.getElementById("footer").innerHTML = result;
    document.getElementById("footer").classList.add("alert-success");


};


/**
 * Bai 3
 * Đầu vào
 * + Giá usd 23,500 VND
 * + Quy đổi từ USD-> VND
 * + Tính số tiền quy đổi
 * Xử lý
 * + chọn 2 USD để quỷ đổi sang VND
 * + var a = 2;
 * + var b = 23,500;
 * + var quydoi = a * b;
 * Đầu ra
 * + show ra tiền đổi 
 */

 document.getElementById("btnGiaTriQuyDoi").onclick = function(){
    //Lấy value từ người dùng nhập
    var a = document.getElementById("txtDoLa").value;
    var b = document.getElementById("VND").value;
    // var sel5 = document.getElementById("select5").value;
    var quydoivnd = (a * b) ;
   
    var result = "So Tien Quy Doi: " + quydoivnd;
    console.log(quydoivnd);

    //Đầu ra : dom toi #footerTip show kết quả
    document.getElementById("QuyDoi").innerHTML = result;
    document.getElementById("QuyDoi").classList.add("alert-success");


};



/**
 * Bai 4
 * Đầu vào 
 * + Chiều dài, chiều rộng
 * + Tính diện tích, chu vi
 * Xử lý 
 * + var a = 5; chiều dài
 * + var b = 3; chiều rộng
 * + var dt = a * b; Tính diện tích
 * + var cv = (a + b) * 2; Tính chu vi
 * Đầu ra
 * + Show dt cv
 */

 document.getElementById("btnCVDT").onclick = function(){
    //Lấy value từ người dùng nhập
    var a = document.getElementById("txtChieuDai").value;
    var b = document.getElementById("txtChieuRong").value;
    
    var chuvi = (a + b) + 2 ;
    var dientich = (a * b);
   
    var result = "Dien Tich Hinh Chu Nhat: " + dientich + "<br /> Chu Vi Hinh Chu Nhat:  " + chuvi;
    console.log(chuvi, dientich);

    //Đầu ra : dom toi #footerTip show kết quả
    document.getElementById("HinhChuNhat").innerHTML = result;
    document.getElementById("HinhChuNhat").classList.add("alert-success");


};




/**
 * Bai 5
 * Đầu vào 
 * + Nhập số có 2 chữ số
 * Xử lý
 * + var a = 12;
 * + var tong = a % 10 + a / 10;
 * Đầu ra
 * + show kết quả
 */


 document.getElementById("btnTong2kyso").onclick = function(){
    //Lấy value từ người dùng nhập
    var a = document.getElementById("txtKySo").value;
    
    
    var Tong = (a % 10) + (a / 10);
   
    var result = "Tong Hai Ky So: " + Tong;
    console.log(Tong);

    //Đầu ra : dom toi #footerTip show kết quả
    document.getElementById("Tong").innerHTML = result;
    document.getElementById("Tong").classList.add("alert-success");


};