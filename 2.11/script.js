alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1, 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1, undefined
alert(null || 2 && 3 || 4); // 3

let value = NaN;
value &&= 10; // 10
value ||= 20; // 10
value &&= 30; // 30
value ||= 40; // 30
alert(value); // 30

const age = 10;
if (age >= 14 && age <= 90) { }
if (!(age >= 14 && age <= 90)) { }
if (age < 14 && age > 90) { }

if (-1 || 0) alert('first'); // +
if (-1 && 0) alert('second'); // -
if (null || -1 && 1) alert('third'); // +

const user = prompt('Кто там?');

if (user === null || user === '') alert('Отмена');
else if (user !== 'Admin') alert('Я вас не знаю');
else {
  const password = prompt('Пароль');
  if (password === null || password === '') alert('Отмена');
  if (password !== 'Я главный') alert('Неверный пароль');
  else alert('Здравствуйте');
}
