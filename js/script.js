const mainBalance = getInputById("mainBalance");

// Add Money
const addMoneySubmit = getInputById("addMoneySubmit");
addMoneySubmit.addEventListener("click", (e) => {
  e.preventDefault();
  addMoneyFunc();
});

const addMoneyFunc = () => {
  // check bank name
  const addMoneyBank = getInputById("addMoneyBank");
  if (addMoneyBank.value === "selectOne") {
    alert("Invalid Bank");
    return;
  }

  // check bank account no
  const addMoneyBankNo = getInputValueById("addMoneyBankNo");
  if (parseFloat(addMoneyBankNo.length) < 6) {
    alert("Invalid Account Number, type minimum 6 digit.");
    return;
  }

  // check amount
  const addMoneyAmount = getInputValueById("addMoneyAmount");
  if (addMoneyAmount === "") {
    alert("Invalid Amount");
    return;
  }

  // check pin number
  const addMoneyPin = getInputValueById("addMoneyPin");
  if (addMoneyPin !== "1234") {
    alert("Invalid Pin");
    return;
  }

  const previousBalance = mainBalance.innerText;

  mainBalance.innerText =
    parseFloat(mainBalance.innerText) + parseFloat(addMoneyAmount);

  // Append child element in transaction
  const transactionList = getInputById("transactionList");
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="font-bold">Add Money</span> <br />
    <span>Previous Balance: ${previousBalance}</span> <br />
    <span>Added Balance: ${addMoneyAmount}</span> <br />
    <span>New Balance: ${mainBalance.innerText}</span> <br />
    <span>Bank Name: ${addMoneyBank.value}</span> <br />
    <span>Account No: ${addMoneyBankNo}</span>`;
  li.classList = "bg-green-300 p-3 rounded-lg mb-3";
  transactionList.appendChild(li);
};

// Cash out
const WithdrawMoneySubmit = getInputById("WithdrawMoneySubmit");
WithdrawMoneySubmit.addEventListener("click", (e) => {
  e.preventDefault();
  cashOutFunc();
});

const cashOutFunc = () => {
  // check agent number
  const cashOutAgentNo = getInputValueById("cashOutAgentNo");
  if (cashOutAgentNo.length < 11) {
    alert("Invalid Number");
    return;
  }

  // check amount
  const cashOutAmount = getInputValueById("cashOutAmount");
  if (cashOutAmount === "") {
    alert("Invalid Amount");
    return;
  }

  // check pin number
  const cashOutPin = getInputValueById("cashOutPin");
  if (cashOutPin !== "1234") {
    alert("Invalid Pin");
    return;
  }

  // check balance
  if (parseFloat(mainBalance.innerText) < parseFloat(cashOutAmount)) {
    alert("Insufficient balance");
    return;
  }

  const previousBalance = mainBalance.innerText;

  mainBalance.innerText =
    parseFloat(mainBalance.innerText) - parseFloat(cashOutAmount);

  // Append child element in transaction
  const transactionList = getInputById("transactionList");
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="font-bold">Cash out</span> <br />
    <span>Previous Balance: ${previousBalance}</span> <br />
    <span>Cash out: ${cashOutAmount}</span> <br />
    <span>New Balance: ${mainBalance.innerText}</span> <br />
    <span>Agent Number: ${cashOutAgentNo}</span>`;
  li.classList = "bg-red-300 p-3 rounded-lg mb-3";
  transactionList.appendChild(li);
};

//
// Transfer Money
const transferMoneySubmit = getInputById("transferMoneySubmit");
transferMoneySubmit.addEventListener("click", (e) => {
  e.preventDefault();
  transferMoneyFunc();
});

const transferMoneyFunc = () => {
  // check agent number
  const transferMoneyAgentNo = getInputValueById("transferMoneyAgentNo");
  if (transferMoneyAgentNo.length < 11) {
    alert("Invalid Number");
    return;
  }

  // check amount
  const transferMoneyAmount = getInputValueById("transferMoneyAmount");
  if (transferMoneyAmount === "") {
    alert("Invalid Amount");
    return;
  }

  // check pin number
  const transferMoneyPin = getInputValueById("transferMoneyPin");
  if (transferMoneyPin !== "1234") {
    alert("Invalid Pin");
    return;
  }

  // check balance
  if (parseFloat(mainBalance.innerText) < parseFloat(transferMoneyAmount)) {
    alert("Insufficient balance");
    return;
  }

  const previousBalance = mainBalance.innerText;

  mainBalance.innerText =
    parseFloat(mainBalance.innerText) - parseFloat(transferMoneyAmount);

  // Append child element in transaction
  const transactionList = getInputById("transactionList");
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="font-bold">Transfer Money</span> <br />
    <span>Previous Balance: ${previousBalance}</span> <br />
    <span>Cash out: ${transferMoneyAmount}</span> <br />
    <span>New Balance: ${mainBalance.innerText}</span> <br />
    <span>Agent Number: ${transferMoneyAgentNo}</span>`;
  li.classList = "bg-red-300 p-3 rounded-lg mb-3";
  transactionList.appendChild(li);
};

//
// Get Bonus
const getBonusSubmit = getInputById("getBonusSubmit");
getBonusSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  getBonusFunc();
});

const getBonusFunc = () => {
  // check coupon input
  const coupon = getInputValueById("couponInput");
  if (coupon !== "Bonus") {
    alert('Invalid coupon. Coupon is "Bonus"');
  }

  const previousBalance = mainBalance.innerText;
  const bonus = parseFloat(mainBalance.innerText) * 0.05;

  mainBalance.innerText = parseFloat(mainBalance.innerText) + bonus;

  // Append child element in coupon area
  const couponList = getInputById("couponList");
  const liC = document.createElement("li");
  liC.innerHTML = `Congratulations! You got ${bonus} taka bonus`;
  liC.classList = "mt-4 text-lg text-orange-600";
  couponList.appendChild(liC);

  // Append child element in transaction
  const transactionList = getInputById("transactionList");
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="font-bold">Transfer Money</span> <br />
    <span>Previous Balance: ${previousBalance}</span> <br />
    <span>Got bonus: ${bonus}</span> <br />
    <span>New Balance: ${mainBalance.innerText}</span> <br />
    <span>Coupon is: ${coupon}</span>`;
  li.classList = "bg-green-300 p-3 rounded-lg mb-3";
  transactionList.appendChild(li);
};


// Pay Bill
const payBillSubmit = getInputById("payBillSubmit");
payBillSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  payBillFunc();
});

const payBillFunc = () => {
  // check bank name
  const payBillBank = getInputById("payBillBank");
  if (payBillBank.value === "selectOne") {
    alert("Invalid Bank");
    return;
  }

  // check bank account no
  const payBillBankNo = getInputValueById("payBillBankNo");
  if (parseFloat(payBillBankNo.length) < 6) {
    alert("Invalid Account Number, type minimum 6 digit.");
    return;
  }

  // check amount
  const payBillAmount = getInputValueById("payBillAmount");
  if (payBillAmount === "") {
    alert("Invalid Amount");
    return;
  }

  // check pin number
  const payBillPin = getInputValueById("payBillPin");
  if (payBillPin !== "1234") {
    alert("Invalid Pin");
    return;
  }

  const previousBalance = mainBalance.innerText;

  mainBalance.innerText =
    parseFloat(mainBalance.innerText) - parseFloat(payBillAmount);

  // Append child element in transaction
  const transactionList = getInputById("transactionList");
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="font-bold">Pay Bill</span> <br />
    <span>Previous Balance: ${previousBalance}</span> <br />
    <span>Bill paid: ${payBillAmount}</span> <br />
    <span>New Balance: ${mainBalance.innerText}</span> <br />
    <span>Bank Name: ${payBillBank.value}</span> <br />
    <span>Account No: ${payBillBankNo}</span>`;
  li.classList = "bg-red-300 p-3 rounded-lg mb-3";
  transactionList.appendChild(li);
};