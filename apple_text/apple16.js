let user = {
  name: "John",
  age: 30,
};

let clone = {};

// 將user中所有屬性拷貝到其中
for (let key in user) {
  clone[key] = user[key];
}

// 現在clone是帶有相同內容的完全獨立的對象
clone.name = "vic";

console.log(user.name);
