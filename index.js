const tableRow = document.getElementById("table-content");
const SiteNameInput = document.getElementById("SiteName");
const SiteUrlInput = document.getElementById("SiteUrl");
const Modal = document.getElementById("Modal");

var BookMarks;

if (localStorage.getItem("@BookMarks")) {
  console.log("items in local storag", localStorage.getItem("@BookMarks"));
  BookMarks = JSON.parse(localStorage.getItem("@BookMarks"));
  console.log(BookMarks);
  DisplayItems(BookMarks);
} else {
  console.log("there is no items");
  BookMarks = [];
}

function ClearInputs() {
  SiteNameInput.value = "";
  SiteUrlInput.value = "";
  SiteNameInput.classList.remove("is-valid");
  SiteUrlInput.classList.remove("is-valid");
}

function AddBookMark() {
  if (ValidateInputs(SiteNameInput)) {
    console.log("pass");
    BookMarks.push({
      Sitename: SiteNameInput.value,
      SiteUrl: SiteUrlInput.value,
    });
    localStorage.setItem("@BookMarks", JSON.stringify(BookMarks));
    ClearInputs();
    DisplayItems(BookMarks);
  } else {
    console.log("fail");
    Modal.classList.add("modal-dialog-centered");
  }
}

function ValidateInputs(element) {
  const Validators = {
    SiteName: /^(\w{3,}(\s\w{1,})*)+$/,
    SiteUrl: /^http(s){0,1}:\/\/(\w){1,}(\.[a-z A-Z](\w)+)+$/,
  };

  if (Validators[element.id].test(element.value)) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    return false;
  }
}

function DeletItem(index) {
  BookMarks.splice(index, 1);
  localStorage.setItem("@BookMarks", JSON.stringify(BookMarks));
  DisplayItems(BookMarks);
}

function VisitUrl(index) {
  window.open(BookMarks[index].SiteUrl);
}

function DisplayItems(array) {
  var box = ``;

  for (let i = 0; i < array.length; i++) {
    box += `<tr>
        <th>${i + 1}</th>
        <td>${BookMarks[i].Sitename}</td>
        <td>
          <div>
            <button onclick="VisitUrl(${i})" class="btn btn-warning">
              <i class="fa-regular fa-eye me-2 fs-6"></i>
              Visit
            </button>
          </div>
        </td>
        <td>
          <div>
            <button onclick="DeletItem(${i})" class="btn btn-danger">
              <i class="fa-solid fa-trash me-2 fs-6"></i>
              Delet
            </button>
          </div>
        </td>
        </tr>`;
  }
  tableRow.innerHTML = box;
}

function ClossModal() {
  Modal.classList.remove("modal-dialog-centered");
}
