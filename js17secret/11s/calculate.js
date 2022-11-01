export function totalFee(inputPeriod) {
  let periodFee = 500;

  const basicFee = basicFeeFun(periodFee, inputPeriod);
  const fulfillPeriodDiscount = fullCountDiscountFun(inputPeriod, 5);
  const onePeriodDiscount = onePeriodDiscountFun(periodFee, 0.21);

  const result = basicFee - fulfillPeriodDiscount - onePeriodDiscount;

  return result;
}

export function fullCountDiscountFun(totalPeriod, DiscountPeriod) {
  const result = +totalPeriod / DiscountPeriod;

  return Math.trunc(result) * 200;
}

export function onePeriodDiscountFun(periodFee, Discount) {
  const oneDiscountFee = Discount * periodFee;

  return oneDiscountFee;
}

export function basicFeeFun(periodFee, inputPeriod) {
  let Period = 0;
  let Fee = 0;
  // const periodFee = 500;

  do {
    Fee = Fee + periodFee;
    Period++;
  } while (Period < inputPeriod);

  return Fee;
}
