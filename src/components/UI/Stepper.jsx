const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="w-full flex justify-between">
      {steps?.map((item, index) => (
        <div
          key={index}
          className={`step-item ${currentStep === index + 1 && "active-step"} ${
            index + 1 < currentStep && "complete-step"
          }`}
        >
          <div className="step">{item.icon}</div>
          <p className="font-medium text-base text-grey mt-2">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
