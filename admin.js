$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('hide show');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });

    $('#form-login').submit(function(e){
        e.preventDefault();

        // Sử dụng tài khoản và mật khẩu là 'admin'
        var tenTaiKhoan = 'bongiu030805@25.03.11';
        var matKhau = 'benha030805/250311';

        var nhapTenTaiKhoan = $('#username').val();
        var nhapMatKhau = $('#password').val();

        // Kiểm tra xem tên tài khoản và mật khẩu nhập vào có trùng khớp với tài khoản và mật khẩu đã lưu hay không
        if (nhapTenTaiKhoan === tenTaiKhoan && nhapMatKhau === matKhau) {
            // Thay 'trang_khac.html' bằng URL của trang web khác mà bạn muốn chuyển hướng đến
            alert('Đã đăng nhập thành công! Yeee bông giỏi quớ, nhấn ok nèo 😍.');
            window.location.href = 'countdowntime.html';
        } else {
            alert('Ơ kè, đăng nhập và phải đúng mứi vô được nha.');
            
        }
    });
});
