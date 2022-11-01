function carryEquipments(num, weight, total) {
  const random = Math.floor(Math.random() * 3);
  // 0 1 2

  if (total + weight[random] < 1000) {
    num[random] = num[random] + 1;
    total = total + weight[random];

    return carryEquipments(num, weight, total);
  }
  return { num, weight, totalWeight: total };
}

main();

function main() {
  let num = [0, 0, 0];
  let weight = [30, 20, 50];
  let totalWeight = 0;

  const result = carryEquipments(num, weight, totalWeight);
  console.log(`總重量：${result.totalWeight}kg`);
  console.log(
    `啞鈴：${result.num[0]}個  單槓：${result.num[1]}個  跑步機：${result.num[2]}個`
  );
}
