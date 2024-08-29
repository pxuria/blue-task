import { useState } from "react";
import { steps } from "../../constants/steps";
import CardSlider from "../UI/CardSlider";
import Stepper from "../UI/Stepper";
import AddPersonalData from "./AddPersonalData";

const AddFacilityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    if (currentStep !== steps.length) setCurrentStep((prev) => prev + 1);
  };
  const backStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="flex items-start mb-4 gap-4">
      <div className="rounded-lg border-2 border-muted border-solid py-8 px-6 w-3/5">
        <form action="">
          <h2 className="text-center font-semibold text-2xl mb-10">افزودن تسهیلات در بلو بانک</h2>
          {/* stepper */}
          <Stepper steps={steps} currentStep={currentStep} />

          {/* <div className="flex flex-wrap justify-start gap-4 mt-6">
          
          <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
            <label htmlFor="firstName" className="font-medium text-base text-[#222]">
              نام
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
            />
          </div>

          
          <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
            <label htmlFor="lastName" className="font-medium text-base text-[#222]">
              نام خانوادگی
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
            />
          </div>

        
          <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
            <label htmlFor="nationalCode" className="font-medium text-base text-[#222]">
              کد ملی
            </label>
            <input
              type="text"
              name="nationalCode"
              id="nationalCode"
              className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
            />
          </div>

         
          <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
            <label htmlFor="phoneNumber" className="font-medium text-base text-[#222]">
              شماره تماس
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
            />
          </div>
        </div> */}

          {currentStep === 1 && <AddPersonalData />}
          <div className="flex items-center justify-evenly w-full mt-4">
            <button
              onClick={nextStep}
              type="button"
              className="outline-none border-2 border-solid border-transparent bg-primary text-white font-medium text-base px-8 py-1 mt-4 rounded-md hover:border-secondary transition-all duration-200 ease-in hover:bg-white hover:text-secondary w-1/3"
            >
              ادامه
            </button>
            <button
              onClick={backStep}
              type="button"
              className="outline-none border-2 border-solid border-transparent bg-primary text-white font-medium text-base px-8 py-1 mt-4 rounded-md hover:border-secondary transition-all duration-200 ease-in hover:bg-white hover:text-secondary w-1/3"
            >
              صفحه قبل
            </button>
          </div>
        </form>
      </div>
      <div className="w-2/5">
        <CardSlider />
      </div>
    </div>
  );
};

export default AddFacilityForm;
