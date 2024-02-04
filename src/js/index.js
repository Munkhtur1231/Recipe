const arr = [23, 44, 12];

let myfunction = (a) => {
  console.log(`too: ${a}`);
};

const arr2 = [...arr, 44, 1223];

myfunction(arr2[2]);

let b = [1, 2, 3].map((n) => n + 1);
console.log(b);
