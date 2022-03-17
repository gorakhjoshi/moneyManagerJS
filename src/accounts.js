'use strict';

const accountOne = {
  owner: 'Gorakh Raj Joshi',
  movements: [200, -300, 400, 500, -700, 1300, -1100, 1600],
  interestRate: 1.5,
  pin: 1234,
};

const accountTwo = {
  movements: [1000, -600, 700, -300, 1300, -1100, 1600],
  owner: 'Shankar Poudel',
  interestRate: 1.1,
  pin: 4444,
};

const accountThree = {
  movements: [1000, -600, 700, -300, 1300, -1100],
  owner: 'Bishal Sharma',
  interestRate: 1.3,
  pin: 2222,
};

const accounts = [accountOne, accountTwo, accountThree];
