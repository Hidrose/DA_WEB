function login(){
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

if(usernameInput==='admin'&& passwordInput==='123'){
    window.location.href='index.html';
    return false;
}
else{
    alert('Sai tên đăng nhập hoặc mật khẩu');
    return false;
}
}
function loginFormURL(){
    const urlParams = new URLSearchParams(window.location.search);
    const usernameInput = urlParams('username');
    const passwordInput = urlParams('password');

    if(username ==='admin' && password ==='123'){
        window.location.href='index.html';
    }
    else{
        alert('Sai tên đăng nhập hoặc mật khẩu');
    }

}