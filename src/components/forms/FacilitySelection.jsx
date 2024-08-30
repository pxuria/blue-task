import { useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa6";
import { data as facilities } from "../../constants/data.json";
import { Buttons, FacilityItem, Modal } from "../UI";

const FacilitySelection = ({ nextStep, backStep }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [repaymentTypeItem, setRepaymentTypeItem] = useState({
    facilityId: facilities[0].id,
    repaymentType: facilities[0].repaymentType[0].value,
  });
  const [facility, setFacility] = useState({
    name: facilities[0].name,
    penaltyRate: facilities[0].penaltyRate,
    percentageRate: facilities[0].percentageRate || "",
    repaymentType: facilities[0].repaymentType[0].value,
    interestRate: facilities[0].interestRate || "",
  });

  const setRepaymentTypeData = (data, type) => {
    setRepaymentTypeItem({
      facilityId: data.id,
      repaymentType: type.value,
    });
    setToggleModal(false);
  };

  console.log(facilities);
  console.log(repaymentTypeItem);

  const setFacilityData = (data) => {
    const newFacility = {
      name: data.name,
      penaltyRate: data.penaltyRate,
      percentageRate: data.percentageRate,
      repaymentTypeItem,
    };
    console.log(data);
    console.log(newFacility);
    setFacility({ ...newFacility });
    setToggleModal(false);
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
            {toggleModal ? (
              <FaChevronDown className="absolute top-1/2 right-4 -translate-y-1/2 h-3 w-3" />
            ) : (
              <FaChevronLeft className="absolute top-1/2 right-4 -translate-y-1/2 h-3 w-3" />
            )}
            <input
              type="text"
              name="facilitySelection"
              id="facilitySelection"
              className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[48px] ps-8 cursor-pointer bg-white hover:bg-[#f8f9fa]"
              onClick={() => setToggleModal(!toggleModal)}
              value={facility.name}
              readOnly
            />
          </div>
          {toggleModal && (
            <Modal onClose={() => setToggleModal(false)}>
              <div className="w-full flex flex-col bg-[#f8f9fa] rounded-xl max-h-[80vh] overflow-y-scroll overflow-x-hidden">
                {facilities?.map((item, index) => (
                  <FacilityItem
                    key={index}
                    index={index}
                    facilities={facilities}
                    setFacilityData={setFacilityData}
                    item={item}
                    setRepaymentTypeItem={setRepaymentTypeItem}
                    repaymentTypeItem={repaymentTypeItem}
                    setRepaymentTypeData={setRepaymentTypeData}
                  />
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
          <input type="text" name="price" id="price" className="input" />
        </div>

        {/* repayment period */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
          <label htmlFor="repaymentPeriod" className="font-medium text-base text-[#222]">
            مدت زمان بازپرداخت
          </label>
          <input type="text" name="repaymentPeriod" id="repaymentPeriod" className="input" />
        </div>

        {/* number of installments */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="numberOfInstallments" className="font-medium text-base text-[#222]">
            تعداد اقساط
          </label>
          <input type="number" name="numberOfInstallments" id="numberOfInstallments" className="input" />
        </div>

        {/* monthly installment amount */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="installmentAmount" className="font-medium text-base text-[#222]">
            مبلغ قسط ماهیانه
          </label>
          <input type="text" name="installmentAmount" id="installmentAmount" className="input" />
        </div>

        {/* annual interest percentage */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="annualInterestPercentage" className="font-medium text-base text-[#222]">
            درصد سود سالیانه
          </label>
          <input type="text" name="annualInterestPercentage" id="annualInterestPercentage" className="input" />
        </div>

        {/* late fine amount */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="lateFineAmount" className="font-medium text-base text-[#222]">
            مبلغ جریمه دیرکرد
          </label>
          <input type="text" name="lateFineAmount" id="lateFineAmount" className="input" />
        </div>
      </div>
      {/* buttons */}
      <Buttons nextStep={nextStep} backStep={backStep} submit />
    </>
  );
};

export default FacilitySelection;
