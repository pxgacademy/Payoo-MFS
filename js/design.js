const loginButton = getInputById("login-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const loginPin = getInputValueById("login-pin");
  const loginSection = getInputById("loginSection");
  const defaultDisplay = getInputById("defaultDisplay");
  const latestPayment = getInputById("latestPayment");
  if (loginPin === "1234") {
    loginSection.classList = "hidden";
    defaultDisplay.classList.remove("hidden");
    latestPayment.classList.remove("hidden");
  }
});

const addMoneyBtn = getInputById("addMoneyBtn");
const cashoutBtn = getInputById("cashoutBtn");
const transferMoneyBtn = getInputById("transferMoneyBtn");
const getBonusBtn = getInputById("getBonusBtn");
const payBillBtn = getInputById("payBillBtn");
const transactionBtn = getInputById("transactionBtn");

const latestPayment = getInputById("latestPayment");
const addMoney = getInputById("addMoney");
const cashOut = getInputById("cashOut");
const transferMoney = getInputById("transferMoney");
const getBonus = getInputById("getBonus");
const payBill = getInputById("payBill");
const transaction = getInputById("transaction");

addMoneyBtn.addEventListener("click", () => {
  showDisplay(addMoney);
});
cashoutBtn.addEventListener("click", () => {
  showDisplay(cashOut);
});
transferMoneyBtn.addEventListener("click", () => {
  showDisplay(transferMoney);
});
getBonusBtn.addEventListener("click", () => {
  showDisplay(getBonus);
});
payBillBtn.addEventListener("click", () => {
  showDisplay(payBill);
});
transactionBtn.addEventListener("click", () => {
  showDisplay(transaction);
});

function showDisplay(e) {
  latestPayment.classList.add("hidden");
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  transferMoney.classList.add("hidden");
  getBonus.classList.add("hidden");
  payBill.classList.add("hidden");
  transaction.classList.add("hidden");

  e.classList.remove("hidden");
}
