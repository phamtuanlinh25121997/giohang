let btnLogin = document.querySelector('#btnLogin');
checkLogin();
function checkLogin() {
  let isLogin = localStorage.getItem("isLogin");
  console.log("trang thai login==>",isLogin);
  if (isLogin == 'true') {
    // to do
    let fullName = localStorage.getItem("fullName");
    let textHello = "Xin chào" + fullName ;
    btnLogin.textContent = textHello;
    return true;
  } else {
    // to do
    return false;
  }
}


// lấy danh sách mèo đã lưu trên local
let listCatConvert = JSON.parse(localStorage.getItem("catMenus"));
console.log("listCatConvert==>", listCatConvert);
// lấy danh sách sản phẩm lưu trong giỏ hàng
let cartList = JSON.parse(localStorage.getItem("cartList"));
console.log("cartList===>",cartList);
tbody.innerHTML = "";
for(let i=0;i<cartList.length;i++){
  // console.log(cartList[i].image);
  tbody.innerHTML = tbody.innerHTML+
  `<tr>
      <th scope="row"><input type="checkbox" class="checkbox"></th>
      <td><img src=${cartList[i].img} class="card-img-top" alt="..."></td>
      <td>${cartList[i].name}</td>
      <td>${cartList[i].price}</td>
  </tr>`;
}

let money = document.getElementById("money");
// tạo 1 biến bằng 0 để để lưu trữ tổng số tiền và tổng số sản phẩm đã được chọn trong giỏ hàng.
let totalMoney = 0;
let numProductsChecked = 0;
for (let i = 0; i < cartList.length; i++) {
  tbody.onclick = function(e) {
    if (e.target.classList.contains("checkbox")) {
      let checkbox = e.target;
      console.log(checkbox);
      let price = cartList[i].price;
      console.log(price);
      // kiểm tra xem checkbox đã được chọn hay chưa. Nếu đã được chọn (checked) thì tiếp tục thực hiện, còn không thì bỏ qua.
      if (checkbox.checked) {
        // Nếu checkbox đã được chọn,tăng tổng số tiền của các sản phẩm được chọn lên với giá của sản phẩm hiện tại.
        totalMoney += price;
        // tăng số lượng sản phẩm được chọn lên
        numProductsChecked++;
      } else {
        totalMoney -= price;
        numProductsChecked--;
      }
      //cập nhật lại giá trị  của phần tổng thanh toán .
      money.textContent = `(${numProductsChecked} sản phẩm )${totalMoney}VND `;
    }
  }
  
}



getDataByID();

function getDataByID () {
  let checkIsLogin = checkLogin();
  //lấy id đưa lên url
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let catID = urlParams.get('catID')
  console.log("catID==>", catID);
  // nếu đã đăng nhập
  if(checkIsLogin) {
    // lọc ra phần tử trong mảng listCatConvert mà có thuộc tính id bằng với giá trị của biến catID.
    let itemFilter = listCatConvert.filter(obj => obj.id == catID)
    console.log("itemFilter==>", itemFilter);
    //lấy ra phần tử đầu tiên trong mảng được lọc ra 
    let itemById = itemFilter[0]
    console.log("itemById==>", itemById);
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = 
    `<tr>
        <th scope="row"><input type="checkbox"></th>
        <td><img src="${itemById.img}" class="card-img-top" alt="..."></td>
        <td>${itemById.name}</td>
        <td>${itemById.price}</td>
    </tr>`;
  }else {
    // alert user not login
    alert('Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục')
  }
}

