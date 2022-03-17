'use strict';

const createUsername = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};

createUsername(accounts);

let currentAccount;

const updateUI = () => {
  displayMovements(currentAccount.movements);
  displaySummary(currentAccount.movements, currentAccount.interestRate);
  displayBalance(currentAccount.movements);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = '';

    labelWelcome.textContent = `Welcome ${currentAccount.owner}`;

    updateUI();
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  inputTransferTo;
  inputTransferAmount;

  const amount = +inputTransferAmount.value;
  console.log(amount);

  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    receiverAccount.movements.push(amount);
    currentAccount.movements.push(-amount);
  }

  updateUI();
});
