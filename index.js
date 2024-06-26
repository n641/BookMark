
const SignUpBtn = document.getElementById("SignUpBtn");
const SignUpNameInput = document.getElementById("SignUpName");
const SignUpEmailInput = document.getElementById("SignUpEmail");
const SignUpPaaswordInput = document.getElementById("SignUpPass");

const errorMsg = document.getElementById("error-Msg");
const ExistErrorMsg = document.getElementById("exist-error-Msg");
const successMsg = document.getElementById("success-Msg");

var Accounts;

if (localStorage.getItem("@Account")) {
  console.log("items in local storag", JSON.parse(localStorage.getItem("@Account")));
  Accounts = JSON.parse(localStorage.getItem("@Account"));
  console.log(Accounts);
} else {
  console.log("there is no items");
  Accounts = [];
}

SignUpBtn.addEventListener("click", SignUp);

function SignUp() {
  if (
    Validate(SignUpNameInput) &&
    Validate(SignUpEmailInput) &&
    Validate(SignUpPaaswordInput)
  ) {
    const Data = {
      name: SignUpNameInput.value,
      email: SignUpEmailInput.value,
      pass: SignUpPaaswordInput.value,
    };
    // remove error
    DiaAppearValidateErroeMessage();

    const ExistEmail = Accounts.find(
      (data) => data?.email === SignUpEmailInput.value
    );
    if (ExistEmail) {
      console.log("exist");
      DiaAppearSuccessMessage();
      AppearExistEmailMessage();
    } else {
      Accounts.push(Data);
      localStorage.setItem("@Account", JSON.stringify(Accounts));
      DiaAppearExistEmailMessage();
      AppearSuccessMessage();
    }
  } else {
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
  ExistErrorMsg.classList.remove("d-none");
  ExistErrorMsg.classList.add("d-flex");
}

function DiaAppearExistEmailMessage(element) {
  ExistErrorMsg.classList.remove("d-flex");
  ExistErrorMsg.classList.add("d-none");
}

function AppearSuccessMessage(element) {
  successMsg.classList.remove("d-none");
  successMsg.classList.add("d-flex");
}

function DiaAppearSuccessMessage(element) {
  successMsg.classList.remove("d-flex");
  successMsg.classList.add("d-none");
}
