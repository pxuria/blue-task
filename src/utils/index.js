export const calculateMonthlyPayment = (amount, months, interestRate) => {
  const facilitiesInstallment = (interestRate * amount + amount) / months;
  return facilitiesInstallment.toLocaleString("fa-IR");
};

export const convertToPersian = (number) => Number(number).toLocaleString("fa-IR");

export const calculateFacilityDetails = (facility, repaymentTypeValue) => {
  const interestRate = facility.interestRate || facility.percentageRate || 0;
  const penaltyPrice = (facility.amount * facility.penaltyRate) / 100;
  const interestPrice = (interestRate * facility.amount) / 100;
  const monthlyInstallment = Math.round(
    ((interestRate / 100) * facility.amount + facility.amount) / repaymentTypeValue
  );

  return {
    name: facility.name,
    amount: facility.amount,
    penaltyRate: facility.penaltyRate,
    repaymentType: repaymentTypeValue,
    percentageRate: facility.percentageRate || "",
    interestRate: facility.interestRate || "",
    penaltyPrice,
    interestPrice,
    monthlyInstallment,
  };
};
