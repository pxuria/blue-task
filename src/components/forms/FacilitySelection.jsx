import { useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa6";
import { data as facilities } from "../../constants/data.json";
import { Modal } from "../UI";

const FacilitySelection = ({ nextStep, backStep }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [repaymentType, setRepaymentType] = useState("");
  const [facility, setFacility] = useState({
    name: facilities[0].name,
    penaltyRate: facilities[0].penaltyRate,
    percentageRate: facilities[0].percentageRate || "",
    repaymentType: facilities[0].repaymentType[0].value,
    interestRate: facilities[0].interestRate || "",
  });

  console.log(facilities);
  console.log(repaymentType);

  const setFacilityData = (data) => {
    const newFacility = {
      name: data.name,
      penaltyRate: data.penaltyRate,
      percentageRate: data.percentageRate,
      repaymentType,
    };
    console.log(data);
    console.log(newFacility);
    setFacility({ ...newFacility });
    setDropDownOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap justify-start gap-4 mt-6">
        {/* facility selection */}
        <div className="flex flex-col gap-2 items-start w-full relative">
          <label htmlFor="facilitySelection" className="font-medium text-base text-[#222]">
            انتخاب نوع تسهیلات
          </label>
          <div className="relative w-full">
            {dropDownOpen ? (
              <FaChevronDown className="absolute top-1/2 right-4 -translate-y-1/2 h-3 w-3" />
            ) : (
              <FaChevronLeft className="absolute top-1/2 right-4 -translate-y-1/2 h-3 w-3" />
            )}
            <input
              type="text"
              name="facilitySelection"
              id="facilitySelection"
              className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[48px] ps-8 cursor-pointer bg-white hover:bg-[#f8f9fa]"
              onClick={() => setDropDownOpen(!dropDownOpen)}
              value={facility.name}
              readOnly
            />
          </div>
          {dropDownOpen && (
            <Modal onClose={() => setDropDownOpen(false)}>
              <div className="w-full flex flex-col bg-[#f8f9fa] rounded-xl max-h-[80vh] overflow-y-scroll overflow-x-hidden">
                {facilities?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setFacilityData(item)}
                    className={`cursor-pointer py-3 px-4 transition-all ease-in duration-200 border-b borde-solid hover:bg-[#efefef] flex items-center justify-between ${
                      facilities.length !== index + 1 && "border-[#c9c9c9]"
                    }`}
                  >
                    <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4 flex-wrap lg:flex-nowrap">
                      <span className="font-bold text-lg text-secondary text-nowrap">{item.name}</span>

                      <div className="py-1 px-1 rounded-md flex flex-col justify-between items-start gap-2">
                        {item.interestRate && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-base text-nowrap">نرخ بهره :</span>
                            <span className="text-sm bg-[#E3ECF8] text-primary font-medium rounded-[4px] py-[2px] px-1">
                              {`${item.interestRate}%`}
                            </span>
                          </div>
                        )}
                        {item.percentageRate && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-base text-nowrap">نرخ درصد :</span>
                            <span className="text-[#35AD8B] bg-[#E0F0ED] text-sm font-medium rounded-[4px] py-[2px] px-1">
                              {`${item.percentageRate}%`}
                            </span>
                          </div>
                        )}
                        {item.penaltyRate && (
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-base text-nowrap">نرخ جریمه :</span>
                            <span className="text-[#BC102B] bg-[#F1DCE1] text-sm font-medium rounded-[4px] py-[2px] px-1">
                              {`${item.penaltyRate}%`}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-2 max-w-[300px]">
                        <span className="font-medium text-base text-nowrap text-primary w-fit relative after:content-[':'] after:absolute after:h-full after:w-1 after:rounded after:text-primary after:text-2xl after:font-semibold after:-left-3 after:top-1/2 after:-translate-y-3/4">
                          نوع بازپرداخت ها
                        </span>
                        <div className="flex flex-wrap justify-start gap-1 ms-4">
                          {item.repaymentType.map((type, i) => (
                            <span
                              key={i}
                              onClick={() => setRepaymentType(type.name)}
                              className={`font-normal text-sm border-2 border-solid border-secondary transition-all ease-in-out duration-300 hover:bg-primary hover:text-white rounded-full py-1 px-2 text-nowrap ${
                                type.name === repaymentType ? "text-white bg-primary" : "text-primary bg-white"
                              }`}
                            >
                              {type.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:hidden bg-primary p-2 rounded-lg flex items-center gap-2 h-fit">
                        <span className="text-white font-semibold text-nowrap">مبلغ :</span>
                        <span className="text-primary font-medium bg-white rounded-[4px] py-[2px] px-2">
                          {item.amount}
                        </span>
                      </div>
                    </div>

                    <div className="bg-primary p-2 rounded-lg hidden lg:flex items-center gap-2 h-fit">
                      <span className="text-white font-semibold text-nowrap">مبلغ :</span>
                      <span className="text-primary font-medium bg-white rounded-[4px] py-[2px] px-2">
                        {item.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Modal>
          )}
        </div>

        {/* price */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
          <label htmlFor="price" className="font-medium text-base text-[#222]">
            مبلغ
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>

        {/* repayment period */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
          <label htmlFor="repaymentPeriod" className="font-medium text-base text-[#222]">
            مدت زمان بازپرداخت
          </label>
          <input
            type="text"
            name="repaymentPeriod"
            id="repaymentPeriod"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>

        {/* number of installments */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="numberOfInstallments" className="font-medium text-base text-[#222]">
            تعداد اقساط
          </label>
          <input
            type="number"
            name="numberOfInstallments"
            id="numberOfInstallments"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>

        {/* monthly installment amount */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="installmentAmount" className="font-medium text-base text-[#222]">
            مبلغ قسط ماهیانه
          </label>
          <input
            type="text"
            name="installmentAmount"
            id="installmentAmount"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>

        {/* annual interest percentage */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="annualInterestPercentage" className="font-medium text-base text-[#222]">
            درصد سود سالیانه
          </label>
          <input
            type="text"
            name="annualInterestPercentage"
            id="annualInterestPercentage"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>

        {/* late fine amount */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="lateFineAmount" className="font-medium text-base text-[#222]">
            مبلغ جریمه دیرکرد
          </label>
          <input
            type="text"
            name="lateFineAmount"
            id="lateFineAmount"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>
      </div>
      {/* buttons */}
      <div className="flex items-center justify-start w-full mt-4 gap-4">
        <button
          onClick={nextStep}
          type="button"
          className="outline-none border-2 border-solid border-transparent bg-primary text-white font-medium text-base px-8 py-1 mt-4 rounded-md hover:border-secondary transition-all duration-200 ease-in hover:bg-white hover:text-secondary w-[calc(50%-0.5rem)]"
        >
          افزودن تسهیلات
        </button>
        <button
          onClick={backStep}
          type="button"
          className="outline-none border-2 border-solid bg-white text-primary font-medium text-base px-8 py-1 mt-4 rounded-md border-primary transition-all duration-200 ease-in hover:bg-primary hover:text-white w-[calc(50%-0.5rem)]"
        >
          صفحه قبل
        </button>
      </div>
    </>
  );
};

export default FacilitySelection;
