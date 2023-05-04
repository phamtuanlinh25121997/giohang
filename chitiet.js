
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
    // lấy danh sách mèo đã lưu trên local
    let listCatOfLocalstorage = localStorage.getItem("catMenus")
    console.log("listCatOfLocalstorage==>", listCatOfLocalstorage);
    // biến về dạng mảng
    let listCatConvert = JSON.parse(listCatOfLocalstorage);
    console.log("listCatConvert==>", listCatConvert);
    // lọc ra phần tử trong mảng listCatConvert mà có thuộc tính id bằng với giá trị của biến catID.
    let itemFilter = listCatConvert.filter(obj => obj.id == catID)
    console.log("itemFilter==>", itemFilter);
    //lấy ra phần tử đầu tiên trong mảng được lọc ra 
    let itemById = itemFilter[0]
    console.log("itemById==>", itemById);

    let chitietmeo= document.getElementById("chitietmeo")
    chitietmeo.innerHTML=`
    <div class="col">
      <img src="${itemById.img}" class="card-img-top" alt="...">
    </div>
    <div class=" col col-detail">
      <div class="name-detail">
          <h5 class="card-title">${itemById.name}</h5>
      </div>
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <div>
                  <span><strong>Chi tiết về bé</strong></span>
                  <ul>
                      <li>Giống:${itemById.name}</li>
                      <li>${itemById.age}</li>
                      <li>${itemById.weight}</li>
                      <li>${itemById.sex}</li>
                      <li>${itemById.price}</li>
                  </ul>
                  <a href="./giohang.html?catID=${itemById.id}&name=${itemById.name}&price=${itemById.price}"><button class="button-buy">Mua Hàng</button></a>
              </div>
          </div>
      </div>
    </div>`;
  } else {
    // alert user not login
    alert('Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục')
  }
}