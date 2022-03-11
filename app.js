'use strict';

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const accountOne = {
  owner: 'Gorakh Raj Joshi',
  movements: [200, -300, 400, 500, -700, 1300, -1100, 1600],
  interestRate: 1.5,
  pin: 1234,
};

const accountTwo = {
  movements: [1000, -600, 700, -300, 1300, -1100, 1600],
  owner: 'Shankar Shrestha',
  interestRate: 1.1,
  pin: 2222,
};

const accounts = [accountOne, accountTwo];

const [{ movements }] = accounts;

// < 0 => withdrawal
// > 0 => deposit

movements.forEach(function (mov, i) {
  // const type = if (mov > 0) {
  //   console.log('deposit');
  // } else {
  //   console.log('withdrawal');
  // }

  const type = mov > 0 ? 'deposite' : 'withdrawal';

  const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__value">${mov}€</div>
        </div>`;
  containerMovements.insertAdjacentHTML('afterbegin', html);
});

console.dir(containerMovements);
