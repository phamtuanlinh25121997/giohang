// gọi ra nút đăng nhập trong ô đăng nhập
let loginButton = document.querySelector('.login');    
// gọi ra ô đăng nhập
let btnLogin = document.querySelector('#btnLogin');
// gắn sự kiện cho nút đăng nhập trong ô đăng nhập
loginButton.addEventListener('click', function() {
  // gọi ra phần email hoặc sdt
  let contactInput = document.querySelector('.communicate');
  // gọi ra phần pass
  let passwordInput = document.querySelectorAll('.communicate')[1];
  let contact = contactInput.value.trim();
  let password = passwordInput.value.trim();

  // Lấy thông tin đăng ký từ Local Storage
  let registeredOfLocal = localStorage.getItem("registeredAccounts")
  console.log("registeredOfLocal===>",registeredOfLocal);
  let registeredOfLocalConvert = JSON.parse(registeredOfLocal)
  console.log("registeredOfLocalConvert==>",registeredOfLocalConvert);
  for(let i=0; i<registeredOfLocalConvert.length;i++){
    if (contact === registeredOfLocalConvert[i].emailOrPhone && password === registeredOfLocalConvert[i].password) {
      alert('Đăng nhập thành công');
      // đổi ô đăng nhập thành chào mừng
      btnLogin.textContent = 'Chào mừng:' + registeredOfLocalConvert[i].fullName;
      localStorage.setItem('isLogin',true);
    }
     else {
      localStorage.setItem("isLogin",false)
      alert('Đăng nhập không thành công');
    }
  }
});
 
//lấy danh sách sản phẩm từ local
let newCatMenu = JSON.parse(localStorage.getItem("catMenus"));
//biến từ dạng chuỗi thành mảng
// let newCatMenuConvert = JSON.parse(newCatMenu)

let rowList = document.getElementById("rowList");
rendernewCatMenu();
function rendernewCatMenu(){
  rowList.innerHTML ="";
  for(let i=0;i<newCatMenu.length;i++){
    rowList.innerHTML = rowList.innerHTML + `
    <div class="col" id="${newCatMenu[i].id}">
      <div class="card row2" style="width: 336px;">
        <img src="${newCatMenu[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title">${newCatMenu[i].name}</p>
          <div class="div-like">
            <a href="./chitiet.html?catID=${newCatMenu[i].id}" class="btn btn-primary">Chi tiết</a>
            <button class="button-heart"><i class="ti-heart" id="${newCatMenu[i].id}""></i></button>
            <a href="./giohang.html?catID=${newCatMenu[i].id}" class="btn btn-primary" id="nowBy">Mua ngay</a>
          </div>
        </div>
      </div>
    </div>`
  }
}
 


// Lưu số lượng sản phẩm trong giỏ hàng vào biến cartQuantity và chuyển đổi sang kiểu số nguyên bằng phương thức parseInt(). 
let cartQuantity = parseInt(document.getElementById("cart-quantity").textContent);
// Tạo một biến cartList để lưu trữ danh sách sản phẩm trong giỏ hàng
let cartList = [];
let rowListElement = document.getElementById("rowList")

rowListElement.onclick = function (event) {
  if(event.target.classList.contains("ti-heart")){
    let findIndex = newCatMenu.findIndex((e)=> e.id === Number(event.target.id))
    console.log(newCatMenu[findIndex]);

    let newCart={
      id: newCatMenu[findIndex].id,
      name: newCatMenu[findIndex].name,
      img: newCatMenu[findIndex].img,
      price: newCatMenu[findIndex].price,
      amount: 0,
    }
cartList.push(newCart); 
console.log(cartList);
let cartListLocal= JSON.stringify(cartList);
console.log(cartListLocal);
localStorage.setItem("cartList",cartListLocal)

let cartIndex = cartList.findIndex((cartItem) => cartItem.id === newCart.id);
if (cartIndex === -1) {
        cartList.push(newCart);
      } else {
        cartList[cartIndex].amount += 1;
      }
  
      console.log(cartList);
      // let cartListLocal= JSON.stringify(cartList);
      console.log(cartListLocal);
      localStorage.setItem("cartList",cartListLocal);
  
      cartQuantity += 1;
      document.getElementById("cart-quantity").textContent = cartQuantity;
      alert("Đã thêm sản phẩm vào giỏ hàng!");
    }
  };










