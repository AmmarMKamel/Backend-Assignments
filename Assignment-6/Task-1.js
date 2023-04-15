Array.prototype.min = function () {
  let min = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min;
};

let arr = [1, 2, 3, 4, 5];
console.log(`Minimum value in the array : ${arr.min()}`);
