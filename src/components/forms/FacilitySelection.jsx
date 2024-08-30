import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa6";
import { data as facilities } from "../../constants/data.json";
import { calculateFacilityDetails, convertToPersian } from "../../utils";
import { Buttons, FacilityItem, Modal } from "../UI";

const FacilitySelection = ({ nextStep, backStep }) => {
  const { setValue } = useFormContext();
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState({
    facilityId: facilities[0].id,
    repaymentType: facilities[0].repaymentType[0].value,
  });

  const [facility, setFacility] = useState(() =>
    calculateFacilityDetails(facilities[0], facilities[0].repaymentType[0].value)
  );

  const updateFormValues = useCallback(
    (facilityDetails) => {
      const fields = [
        { key: "facilityName", value: facilityDetails.name },
        { key: "amount", value: facilityDetails.amount },
        { key: "facilityId", value: selectedFacility.facilityId },
        { key: "repaymentType", value: facilityDetails.repaymentType },
        { key: "penaltyRate", value: facilityDetails.penaltyRate },
        { key: "percentageRate", value: facilityDetails.percentageRate || "" },
        { key: "interestRate", value: facilityDetails.interestRate || "" },
        { key: "penaltyPrice", value: facilityDetails.penaltyPrice },
        { key: "interestPrice", value: facilityDetails.interestPrice },
        { key: "monthlyInstallment", value: facilityDetails.monthlyInstallment },
      ];
      fields.forEach(({ key, value }) => setValue(key, value));
    },
    [setValue, selectedFacility.facilityId]
  );

  useEffect(() => {
    updateFormValues(facility);
  }, [facility, updateFormValues]);

  const setRepaymentTypeData = useCallback(
    (data, type) => {
      const updatedFacility = calculateFacilityDetails(data, type.value);

      setSelectedFacility({ facilityId: data.id, repaymentType: type.value });
      setFacility(updatedFacility);
      updateFormValues(updatedFacility);

      setToggleModal(false);
    },
    [updateFormValues]
  );

  const calculateMonthlyPayment = useCallback((amount, months, interestRate, percentageRate) => {
    const rate = interestRate || percentageRate || 0;
    const facilitiesInstallment = Math.round(((rate / 100) * amount + amount) / months);
    return convertToPersian(facilitiesInstallment);
  }, []);

  const facilityOptions = useMemo(
    () =>
      facilities.map((item, index) => (
        <FacilityItem
          key={item.id}
          index={index}
          facilities={facilities}
          item={item}
          selectedFacility={selectedFacility}
          setRepaymentTypeData={setRepaymentTypeData}
        />
      )),
    [selectedFacility, setRepaymentTypeData]
  );

  return (
    <>
      <div className="flex flex-wrap justify-start gap-4 mt-6">
        {/* facility selection */}
        <div className="flex flex-col gap-2 items-start w-full relative">
          <label htmlFor="facilitySelection" className="label">
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
                {facilityOptions}
              </div>
            </Modal>
          )}
        </div>

        {/* amount */}
        <div className="input-group">
          <label htmlFor="price" className="label">
            مبلغ
          </label>
          <input
            type="text"
            name="price"
            id="price"
            value={`${convertToPersian(facility.amount)} ریال`}
            className="readonly-input"
            readOnly
          />
        </div>

        {/* repayment period */}
        <div className="input-group">
          <label htmlFor="repaymentPeriod" className="label">
            مدت زمان بازپرداخت
          </label>
          <input
            type="text"
            name="repaymentPeriod"
            id="repaymentPeriod"
            value={`${convertToPersian(facility.repaymentType)} ماهه`}
            className="readonly-input"
            readOnly
          />
        </div>

        {/* number of installments */}
        <div className="input-group mt-2">
          <label htmlFor="numberOfInstallments" className="label">
            تعداد اقساط
          </label>
          <input
            type="text"
            name="numberOfInstallments"
            id="numberOfInstallments"
            value={convertToPersian(facility.repaymentType)}
            className="readonly-input"
            readOnly
          />
        </div>

        {/* monthly installment amount */}
        <div className="input-group mt-2">
          <label htmlFor="installmentAmount" className="label">
            مبلغ قسط ماهیانه
          </label>
          <input
            type="text"
            name="installmentAmount"
            id="installmentAmount"
            value={`${calculateMonthlyPayment(
              facility.amount,
              facility.repaymentType,
              facility.interestRate,
              facility.percentageRate
            )} ریال`}
            className="readonly-input"
            readOnly
          />
        </div>

        {/* annual interest percentage */}
        <div className="input-group mt-2">
          <div className="flex gap-2 flex-nowrap">
            <label htmlFor="annualInterestPercentage" className="label">
              مبلغ سود سالیانه
            </label>
            <span className="text-[#35AD8B] bg-[#E0F0ED] px-2 rounded-md">{`${
              facility.interestRate || facility.percentageRate
            }%`}</span>
          </div>
          <input
            type="text"
            name="annualInterestPercentage"
            id="annualInterestPercentage"
            value={`${convertToPersian(
              ((facility.interestRate || facility.percentageRate) * facility.amount) / 100
            )} ریال`}
            className="readonly-input"
            readOnly
          />
        </div>

        {/* late fine amount */}
        <div className="input-group mt-2">
          <div className="flex gap-2 flex-nowrap">
            <label htmlFor="lateFineAmount" className="label">
              مبلغ جریمه دیرکرد
            </label>
            <span className="text-[#BC102B] bg-[#F1DCE1] px-2 rounded-md">{`${facility.penaltyRate}%`}</span>
          </div>
          <input
            type="text"
            name="lateFineAmount"
            id="lateFineAmount"
            value={`${convertToPersian((facility.amount * facility.penaltyRate) / 100)} ریال`}
            className="readonly-input"
            readOnly
          />
        </div>
      </div>

      {/* buttons */}
      <Buttons nextStep={nextStep} backStep={backStep} submit />
    </>
  );
};

export default FacilitySelection;
