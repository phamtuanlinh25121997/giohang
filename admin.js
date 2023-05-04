let catMenu = [
  {
    id:1,
    img:"./anh/ald-600x600.jpg",
    name:"Mèo Anh lông dài DD011",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:2,
    img:"./anh/aldmatxanh-600x600.jpg",
    name:"Mèo Anh Lông Dài Mắt Xanh",
    age:"3 tháng",
    weight:"3 kg",
    sex:"Đực",
    price:"2,700,000",
  },
  {
    id:3,
    img:"./anh/aldxam-1-600x600.jpg",
    name:"Mèo Anh Lông Dài Xám Xanh DD012",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:4,
    img:"./anh/aldxam-600x600.jpg",
    name:"Mèo Anh Lông Dài Xám DD009",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:5,
    img:"./anh/v-600x600.jpg",
    name:"Mèo Anh Lông Dài Màu Vàng DD016",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:6,
    img:"./anh/siver-600x600.jpg",
    name:"Mèo Anh Lông Ngắn Silver",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:7,
    img:"./anh/meo-golden-600x600.jpg",
    name:"Mèo GOLDEL DD002",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:8,
    img:"./anh/godel-600x600.jpg",
    name:"Mèo GOLDEL DD001",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:9,
    img:"./anh/z4220581829298_8038fc4804ebf7e075fa756891131c43-768x768.jpg",
    name:"Mèo GOLDEL DD007",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:10,
    img:"./anh/chanlunbi-600x600.jpg",
    name:"Mèo Chân Ngắn Bicolor",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:11,
    img:"./anh/chan-lun-600x600.jpg",
    name:"Mèo Chân Ngắn DD006",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:12,
    img:"./anh/lun-600x600.jpg",
    name:"Mèo Chân Ngắn DD010",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:13,
    img:"./anh/z4220570262685_7a37db84de05c27150138615c358a41e-768x768.jpg",
    name:"Mèo Munchkin",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  {
    id:14,
    img:"./anh/lun-1-600x600.jpg",
    name:"Mèo Munchkin Màu Cream",
    age:"3 tháng",
    weight:"2.5 kg",
    sex:"Đực",
    price:"2,500,000",
  },
  ];
  localStorage.setItem("catMenus",JSON.stringify(catMenu))
  let tbody = document.getElementById("tbody");
  let form = document.getElementById("main-form");


  renderCatmenu();
  
  function renderCatmenu(){
    let catMenus = localStorage.getItem("catMenus")
    let listMenu = JSON.parse(catMenus)
    console.log(listMenu);
    tbody.innerHTML = "";
    for (let i = 0; i < listMenu.length; i++) {
      tbody.innerHTML = tbody.innerHTML + 
      `<tr id="${listMenu[i].id}">
          <th scope="row">${i + 1}</th>
          <td class="td-img">${listMenu[i].img}</td>
          <td>${listMenu[i].name}</td>
          <td>${listMenu[i].age}</td>
          <td>${listMenu[i].weight}</td>
          <td>${listMenu[i].sex}</td>
          <td>${listMenu[i].price}</td>
          <td>
              <button type="button" class="btn btn-primary">Sửa</button>
              <button type="button" class="btn btn-danger">Xóa</button>
          </td>
      </tr>`
      
    }
  }
  form.onsubmit = function(e){
    let newArray = localStorage.getItem("catMenus") 
    let newArr = JSON.parse(newArray)
    e.preventDefault();
    let newCatMenu = {
      id: Math.floor(Math.random() * 1000000000),
      img:form.img.value,
      name:form.name.value,
      age:form.age.value,
      weight:form.weight.value,
      sex:form.sex.value,
      price:form.price.value,
    };
    newArr.push(newCatMenu);
    localStorage.setItem("catMenus",JSON.stringify(newArr));   
    renderCatmenu();
  };


  
tbody.onclick = function(e){
  if(e.target.classList.contains("btn-primary")){
    let id = e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;
    let findIndex = -1;
    for (let i = 0; i < catMenu.length; i = i + 1) {
      if (catMenu[i].id === Number(id)) {
        findIndex = i;
      }
    }
    if (findIndex > -1) {
      updateIndex = findIndex;
      let find = catMenu[findIndex];
      td.innerHTML = `<tr id="${find.id}">
      <th scope="row"></th>
      <td><input type="file"/ value="${find.img}"></td>
      <td><input type="text"/ value="${find.name}"></td>
      <td><input type="text"/ value="${find.age}"></td>
      <td><input type="text"/ value="${find.weight}"></td>
      <td>
      <select name="sex" class="form-select" id="sex">
        <option selected>Giới tính</option>
        <option value="Pending">Đực</option>
        <option value="Fulfill">Cái</option>
      </select></td>
      <td><input type="text"/ value="${find.price}"></td>
      <td>
          <button type="button" class="btn btn-info btn-save">lưu</button>
          <button type="button" class="btn btn-danger btn-delete">Xóa</button>
      </td>
  </tr>`
  }
}
if (e.target.classList.contains("btn-save")) {
  let img =
    e.target.parentElement.parentElement.children[1].children[0].value;
  let name =
    e.target.parentElement.parentElement.children[2].children[0].value;
  let age =
    e.target.parentElement.parentElement.children[3].children[0].value;
  let weight =
    e.target.parentElement.parentElement.children[4].children[0].value;
  let sex =
    e.target.parentElement.parentElement.children[5].children[0].value;
  let price =
    e.target.parentElement.parentElement.children[6].children[0].value;

  catMenu[updateIndex] = {
    ...catMenu[updateIndex],
    img: img,
    name: name,
    age: age,
    weight: weight,
    sex:sex,
    price: price,
  }; 

  renderCatmenu();
}
if (e.target.classList.contains("btn-danger")) {
    let newArray = localStorage.getItem("catMenus") 
    let newArr = JSON.parse(newArray)
    let deleteElement = e.target.parentElement.parentElement;
    let id = deleteElement.id;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id === Number(id)) {
        newArr.splice(i, 1);
        break;
      }
    }
    deleteElement.remove();
    localStorage.setItem("catMenus",JSON.stringify(newArr));
  }
}


