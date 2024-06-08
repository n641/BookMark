const LoginBtn = document.getElementById("loginBtn");
const LoginEmailInput = document.getElementById("loginEmail");
const LoginPaaswordInput = document.getElementById("loginPass");

const errorMsg = document.getElementById("error-Msg");
const notExistErrorMsg = document.getElementById("not-exist-error-Msg");
const successMsg = document.getElementById("success-Msg");

var Accounts;

if (localStorage.getItem("@Account")) {
  console.log(
    "items in local storag",
    JSON.parse(localStorage.getItem("@Account"))
  );
  Accounts = JSON.parse(localStorage.getItem("@Account"));
  console.log(Accounts);
} else {
  console.log("there is no items");
  Accounts = [];
}

LoginBtn.addEventListener("click", Login);

function Login() {
  if (Validate(LoginEmailInput) && Validate(LoginPaaswordInput)) {
    const Data = {
      email: LoginEmailInput.value,
      pass: LoginPaaswordInput.value,
    };
    DiaAppearValidateErroeMessage();
    const CorrectData = Accounts.find(
      (data) =>
        data?.email === LoginEmailInput.value &&
        data?.pass === LoginPaaswordInput.value
    );

    if (CorrectData) {
      DiaAppearExistEmailMessage();
      DiaAppearValidateErroeMessage();
      AppearSuccessMessage();
      console.log(CorrectData);
      localStorage.setItem("@ActiveEmail", JSON.stringify(CorrectData));
      window.location.href = "home.html";
    } else {
      AppearExistEmailMessage();
    }
  } else {
    DiaAppearExistEmailMessage();
    DiaAppearSuccessMessage();
    AppearValidateErroeMessage();
  }
}

function Validate(element) {
  const regex = /(\w)+/;
  if (regex.test(element.value)) {
    return true;
  } else {
    return false;
  }
}

function AppearValidateErroeMessage(element) {
  errorMsg.classList.remove("d-none");
  errorMsg.classList.add("d-flex");
}

function DiaAppearValidateErroeMessage(element) {
  errorMsg.classList.remove("d-flex");
  errorMsg.classList.add("d-none");
}

function AppearExistEmailMessage(element) {
  notExistErrorMsg.classList.remove("d-none");
  notExistErrorMsg.classList.add("d-flex");
}

function DiaAppearExistEmailMessage(element) {
  notExistErrorMsg.classList.remove("d-flex");
  notExistErrorMsg.classList.add("d-none");
}

function AppearSuccessMessage(element) {
  successMsg.classList.remove("d-none");
  successMsg.classList.add("d-flex");
}

function DiaAppearSuccessMessage(element) {
  successMsg.classList.remove("d-flex");
  successMsg.classList.add("d-none");
}
