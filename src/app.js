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

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = '';

    labelWelcome.textContent = `Welcome ${currentAccount.owner}`;

    displayMovements(currentAccount.movements);
    displaySummary(currentAccount.movements, currentAccount.interestRate);
    displayBalance(currentAccount.movements);
  }
});
