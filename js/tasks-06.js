let input;
let total = 0;
const numbers = [];

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }

  numbers.push(Number(input));
}

if (numbers.length > 0) {
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    total += number;
  }
}

alert(`Общая сумма чисел равна ${total}`);
