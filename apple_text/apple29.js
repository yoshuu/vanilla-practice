function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [1, 2, 2, 2, 3, 4, 4, 4, 5, 5];

let newValues = unique(values);

console.log(newValues); // [ 1, 2, 3, 4, 5 ]
