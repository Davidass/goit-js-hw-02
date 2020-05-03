let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  const notNumber = Number.isNaN(input);

  if (notNumber) {
    alert('Было введено не число, пропускаем текущию итерацию!');
    continue;
  }

  total += input;
}

alert(`Общая сумма чисел равна ${total}`);
