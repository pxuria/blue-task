import { Buttons } from "../UI";

const AddBankAccountData = ({ nextStep, backStep }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-start gap-4 mt-6">
        {/* bank account number */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)]">
          <label htmlFor="bankAccountNumber" className="font-medium text-base text-[#222]">
            شماره حساب
          </label>
          <input type="text" name="bankAccountNumber" id="bankAccountNumber" className="input" />
        </div>

        {/* average annual account balance */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)]">
          <label htmlFor="averageBalance" className="font-medium text-base text-[#222]">
            میانگین ریالی موجودی سالیانه
          </label>
          <input type="text" name="averageBalance" id="averageBalance" className="input" />
        </div>

        {/* shaba number */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)] flex-1 mt-2">
          <label htmlFor="shabaNumber" className="font-medium text-base text-[#222]">
            شماره شبا
          </label>
          <input type="text" name="shabaNumber" id="shabaNumber" className="input" />
        </div>
      </div>
      {/* buttons */}
      <Buttons nextStep={nextStep} backStep={backStep} />
    </>
  );
};

export default AddBankAccountData;
