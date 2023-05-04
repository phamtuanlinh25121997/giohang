// gọi ra nút đăng nhập trong ô đăng nhập
let loginButton = document.querySelector('.login');    
// gọi ra ô đăng nhập
let btnLogin = document.querySelector('#btnLogin');
// // gọi phần thân
let header = document.getElementById("header");
// // Lấy tất cả các nút trái tim
let heartButton = document.querySelectorAll(".button-heart")
// Lưu số lượng sản phẩm trong giỏ hàng vào biến cartQuantity và chuyển đổi sang kiểu số nguyên bằng phương thức parseInt(). 
let cartQuantity = parseInt(document.getElementById("cart-quantity").textContent);
// gọi phần thẻ ảnh 
let container = document.querySelectorAll('.container')




// gắn sự kiện cho nút đăng nhập trong ô đăng nhập
loginButton.addEventListener('click', function() {
    // gọi ra phần email hoặc sdt
  let contactInput = document.querySelector('.communicate');
  // gọi ra phần pass
  let passwordInput = document.querySelectorAll('.communicate')[1];
  let contact = contactInput.value.trim();
  let password = passwordInput.value.trim();

  // Lấy thông tin đăng ký từ Local Storage
  let localContact = localStorage.getItem('contact');
trangchu copy  let localPassword = localStorage.getItem('password');
  let fullName = localStorage.getItem('fullName');
  // let isLogIn = localStorage.getItem("isLogIn");

  if (contact === localContact && password === localPassword) {
    alert('Đăng nhập thành công');
    // đổi ô đăng nhập thành chào mừng
    btnLogin.textContent = 'Chào mừng, ' + fullName;
    localStorage.setItem('isLogin','true');

  } else {
    localStorage.setItem("isLogin",false)
    alert('Đăng nhập không thành công');
  }
});
 

// Duyệt qua tất cả các button-heart và gắn sự kiện click vào chúng
heartButton.forEach((heartButton) => {
  heartButton.addEventListener("click", function() {
    // Nếu đang ở trạng thái thích sản phẩm, tăng giá trị của cartQuantity lên 1 và hiển thị lại số lượng trên giỏ hàng
    if (this.classList.contains("liked")) {
      cartQuantity--;
      this.classList.remove("liked");
    } else { // Ngược lại, giảm giá trị của cartQuantity đi 1 và hiển thị lại số lượng trên giỏ hàng
      cartQuantity++;
      this.classList.add("liked");
    }
    // Cập nhật số lượng sản phẩm trên giao diện
    document.getElementById("cart-quantity").textContent = cartQuantity;    
    localStorage.setItem("cart-quantity",cartQuantity)
  });
});

let newCatMenu = localStorage.getItem("catMenus")
console.log(newCatMenu);








