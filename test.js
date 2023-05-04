let works = [
  {
    id: 1,
    content: "Learn Javascript Session 01",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Anh Bách",
  },
  {
    id: 2,
    content: "Learn Javascript Session 2",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Lâm th`",
  },
  {
    id: 3,
    content: "Learn CSS Session 1",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Hiếu Ci ớt ớt",
  },
];

// query HTML element
const tbody = document.getElementById("tbody");
const form = document.getElementById("main-form");
const toastElement = document.getElementById("toast-body");
let updateIndex = undefined;

// render works
function renderWorks() {
  tbody.innerHTML = "";
  for (let i = 0; i < works.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${works[i].id}">
              <th scope="row">${i + 1}</th>
              <td>${works[i].content}</td>
              <td>${works[i].dueDate}</td>
              <td>${works[i].status}</td>
              <td>${works[i].assignedTo}</td>
              <td>
                  <button class="btn btn-success btn-update">Update</button>
                  <button class="btn btn-danger btn-delete">Delete</button>
              </td>
        </tr>`;
  }
}

renderWorks();

form.onsubmit = function (e) {
  e.preventDefault();

  let work = {
    id: Math.floor(Math.random() * 1000000000),
    content: form.content.value,
    dueDate: form.dueDate.value,
    status: form.status.value,
    assignedTo: form.username.value,
  };

  works.push(work);
  renderWorks();
};

tbody.onclick = function (e) {
  if (e.target.classList.contains("btn-update")) {
    let id = e.target.parentElement.parentElement.id; 
    let td = e.target.parentElement.parentElement;
    let findIndex = -1;
    for (let i = 0; i < works.length; i = i + 1) {
      if (works[i].id === Number(id)) {
        findIndex = i;
      }
    }
    if (findIndex > -1) {
      updateIndex = findIndex;
      let find = works[findIndex];
      console.log(find);
      td.innerHTML = `<tr id="${find.id}">
                          <th scope="row"></th>
                          <td><input type="text"/ value="${find.content}"></td>
                          <td><input type="date" value="${find.dueDate}"/></td>
                          <td>
                            <select>
                              <option>Choose...</option>
                              <option selected value="Pending">Pending</option>
                              <option value="Fulfill">Fulfill</option>
                              <option value="Reject">Reject</option>
                            </select>
                          </td>
                          <td><input type="text" value="${find.assignedTo}"/></td>
                          <td>
                              <button class="btn btn-info btn-confirm">Confirm</button>
                              <button class="btn btn-danger btn-cancel">Cancel</button>
                          </td>
                      </tr>`;
    }
  }
  if (e.target.classList.contains("btn-confirm")) {
    let content =
      e.target.parentElement.parentElement.children[1].children[0].value;
    let dueDate =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let status =
      e.target.parentElement.parentElement.children[3].children[0].value;
    let assignedTo =
      e.target.parentElement.parentElement.children[4].children[0].value;

    works[updateIndex] = {
      ...works[updateIndex],
      content: content,
      dueDate: dueDate,
      status: status,
      assignedTo: assignedTo,
    }; // {}

    renderWorks();
  }
};
