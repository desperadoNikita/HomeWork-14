// задача яку обіцяв

const arr = [1, 2, 3, 4, 5];

Array.prototype.mnoz = function (n) {
  return this.map(function (number) {
    return number * n;
  });
};

console.log(arr.mnoz(2));


const arr1 = [1, 2, 3, 4, 5].mnoz(10);

console.log(arr1);