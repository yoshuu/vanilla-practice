const map = new Map();
console.log(map); // Map(0) {}

map.set(String(1), "a");
map.set(2, "b");
map.set(3, "c");
console.log(map); // Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }

console.log(map.get(1)); // a

map.delete(1);
console.log(map); // Map(2) { 2 => 'b', 3 => 'c' }

console.log(map.has(1)); // false
console.log(map.has(2)); // true

console.log(map.size); // 2

map.clear();
console.log(map); // Map(0) {}
