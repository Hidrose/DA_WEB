function signup(event) {
    event.preventDefault(); // Ngăn chặn form submit
  
    // Thực hiện logic đăng ký ở đây
    // ...
  
    // Hiển thị thông báo đăng ký thành công
    alert("Đăng ký thành công!");
  
    // Chuyển hướng sang trang userLogin.html
    window.location.href = "./userLogin.html";
  }
  function login(event) {
    event.preventDefault(); // Ngăn chặn form submit
  
    // Thực hiện logic đăng nhập ở đây
    // ...
  
    // Chuyển hướng sang trang index.html
    window.location.href = "./index-user.html";
  }