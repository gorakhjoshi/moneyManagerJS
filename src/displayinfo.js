'use strict';

const displayMovements = (movements) => {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposite' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = (movements) => {
  const balance = movements.reduce((acc, movement) => acc + movement, 0);
  currentAccount.balance = balance;

  labelBalance.textContent = balance;
};

const displaySummary = (movements, rate) => {
  const depositsSum = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const withdrawalSum = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => +(deposit * (rate / 100)).toFixed(2))
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${depositsSum}€`;

  labelSumOut.textContent = `${withdrawalSum}€`;

  labelSumInterest.textContent = interest;
};
