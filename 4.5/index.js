let Acc = function(initialVal) {
  this.value = Number(initialVal);

  this.read = function() {
    const inputValue = Number(prompt('Какое число добавить?'));
    this.add(inputValue);
  }

  this.add = function(newValue) {
    this.value += newValue;
  }
}

const acc = new Acc(5);

alert(acc.value);

acc.read();
acc.read();

alert(acc.value);
