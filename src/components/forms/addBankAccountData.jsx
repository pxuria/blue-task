import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Buttons } from "../UI";

const AddBankAccountData = ({ nextStep, backStep }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [shaba, setShaba] = useState("");
  const [bankAccount, setBankAccount] = useState("");

  const numChangeHandler = (e, setFunc) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    setFunc(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-start gap-4 mt-6">
        {/* bank account number */}
        <div className="input-group">
          <label htmlFor="bankAccountNumber" className="label">
            شماره حساب
          </label>
          <input
            type="text"
            name="bankAccountNumber"
            id="bankAccountNumber"
            className={`input ${errors.bankAccountNumber && "input-error"}`}
            maxLength={16}
            value={bankAccount}
            onInput={(e) => numChangeHandler(e, setBankAccount)}
            {...register("bankAccountNumber", { required: true })}
          />
          {errors.bankAccountNumber && <p className="error">{errors.bankAccountNumber.message}</p>}
        </div>

        {/* average annual account balance */}
        <div className="input-group">
          <label htmlFor="averageBalance" className="label">
            میانگین ریالی موجودی سالیانه
          </label>
          <input
            type="text"
            name="averageBalance"
            id="averageBalance"
            className={`input ${errors.averageBalance && "input-error"}`}
            {...register("averageBalance", { required: true })}
          />
          {errors.averageBalance && <p className="error">{errors.averageBalance.message}</p>}
        </div>

        {/* shaba number */}
        <div className="input-group flex-1 mt-2">
          <label htmlFor="shabaNumber" className="label">
            شماره شبا
          </label>
          <input
            type="text"
            name="shabaNumber"
            id="shabaNumber"
            maxLength={24}
            value={shaba}
            onInput={(e) => numChangeHandler(e, setShaba)}
            className={`input ${errors.shabaNumber && "input-error"}`}
            {...register("shabaNumber", { required: true })}
          />
          {errors.shabaNumber && <p className="error">{errors.shabaNumber.message}</p>}
        </div>
      </div>

      {/* buttons */}
      <Buttons nextStep={nextStep} backStep={backStep} />
    </>
  );
};

export default AddBankAccountData;
