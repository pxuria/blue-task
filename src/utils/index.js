export const calculateMonthlyPayment = (amount, months, interestRate) => {
  const facilitiesInstallment = (interestRate * amount + amount) / months;
  return facilitiesInstallment.toLocaleString("fa-IR");
};

export const convertToPersian = (number) => Number(number).toLocaleString("fa-IR");
