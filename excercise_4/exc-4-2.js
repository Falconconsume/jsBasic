let newObj = {
  _value: 0,
  oldValues: [],

  set value(num) {
    this.oldValues.push(this._value);

    this._value = num;
  },

  getValue() {
    return this._value;
  },
};

newObj.value = 1;
newObj.value = 2;
newObj.value = 3;
newObj.value = 4;
console.log(newObj.oldValues); // [0, 1, 2, 3]
