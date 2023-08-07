function redirectToNewPage() {
    window.location.href = 'index.html';
}

function startCountdown() {
    var countdownDate = new Date("Aug 07, 2023 23:35:00").getTime();
    var now = new Date().getTime();
    var timeRemaining = countdownDate - now;

    if (timeRemaining <= 0) {
        redirectToNewPage();
    } else {
        setTimeout(redirectToNewPage, timeRemaining);
    }
}

startCountdown();
// cách 2
    // Hàm chuyển hướng trang
    // function redirect() {
    //     window.location.href = 'index.html'; // Thay đổi URL đích tại đây
    //   }
  
    //   // Thời gian cụ thể: ngày, tháng, năm, giờ, phút, giây
    //   const targetDate = new Date('2023-08-02T15:48:00'); // Ví dụ: 3 tháng 8 năm 2023, 12:30:00
  
    //   // Tính toán thời gian chênh lệch giữa thời gian hiện tại và thời gian cụ thể
    //   const currentTime = new Date();
    //   const timeDifference = targetDate - currentTime;
  
    //   // Đặt hẹn giờ chuyển hướng trang
    //   setTimeout(redirect, timeDifference);