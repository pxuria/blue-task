const AddBankAccountData = ({ nextStep, backStep }) => {
  return (
    <>
      <div className="flex flex-wrap justify-start gap-4 mt-6">
        {/* bank account number */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
          <label htmlFor="bankAccountNumber" className="font-medium text-base text-[#222]">
            شماره حساب
          </label>
          <input
            type="text"
            name="bankAccountNumber"
            id="bankAccountNumber"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>

        {/* average annual account balance */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)]">
          <label htmlFor="averageBalance" className="font-medium text-base text-[#222]">
            میانگین ریالی موجودی سالیانه
          </label>
          <input
            type="text"
            name="averageBalance"
            id="averageBalance"
            className="outline-none border-2 border-solid border-secondary px-2 py-1 rounded-md w-full h-[40px]"
          />
        </div>

        {/* shaba number */}
        <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] flex-1 mt-2">
          <label htmlFor="shabaNumber" className="font-medium text-base text-[#222]">
            شماره شبا
          </label>
          <input
            type="text"
            name="shabaNumber"
            id="shabaNumber"
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
          ادامه
        </button>
        <button
          onClick={backStep}
          type="button"
          className="outline-none border-2 border-solid bg-white text-grey font-medium text-base px-8 py-1 mt-4 rounded-md border-muted transition-all duration-200 ease-in hover:bg-muted hover:text-white w-[calc(50%-0.5rem)]"
        >
          صفحه قبل
        </button>
      </div>
    </>
  );
};

export default AddBankAccountData;
