import { useState } from "react";
import { useForm } from "react-hook-form";
import { steps } from "../../constants/steps";
import { CardSlider, Stepper } from "../UI";
import { AddBankAccountData, AddPersonalData, FacilitySelection } from "./";

const AddFacilityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit } = useForm();
  const nextStep = () => {
    if (currentStep !== steps.length) setCurrentStep((prev) => prev + 1);
  };
  const backStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center mb-4 gap-4 w-full">
      <div className="rounded-lg border-2 border-muted border-solid py-8 px-6 w-full lg:w-3/5 relative backdrop-blur-xl overflow-hidden">
        <form onSubmit={handleSubmit(submitHandler)}>
          <h2 className="text-center font-semibold text-2xl mb-10">افزودن تسهیلات در بلو بانک</h2>
          {/* stepper */}
          <Stepper steps={steps} currentStep={currentStep} />

          {/* forms */}
          {currentStep === 1 && <AddPersonalData nextStep={nextStep} backStep={backStep} />}
          {currentStep === 2 && <AddBankAccountData nextStep={nextStep} backStep={backStep} />}
          {currentStep === 3 && <FacilitySelection nextStep={nextStep} backStep={backStep} />}
        </form>
      </div>
      <div className="hidden lg:block w-2/5">
        <CardSlider />
      </div>
    </div>
  );
};

export default AddFacilityForm;
