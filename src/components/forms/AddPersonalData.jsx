import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

const AddPersonalData = ({ nextStep, backStep }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  // console.log(selectedDate.format());

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-start gap-4 mt-6">
        {/* first name */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)]">
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

        {/* last name */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)]">
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

        {/* national code */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)] mt-2">
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

        {/* phone number */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)] mt-2">
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

        {/* birth date */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="birthDate" className="font-medium text-base text-[#222]">
            تاریخ تولد
          </label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={selectedDate}
            placeholder="تاریخ تولد خود را انتخاب کنید"
            onChange={setSelectedDate}
            name="birthDate"
            id="birthDate"
            style={{
              outline: "none",
              border: "2px solid #2073df",
              padding: "0.25rem",
              paddingInline: "0.5rem",
              borderRadius: "6px",
              width: "100%",
              height: "40px",
            }}
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
      </div>
    </>
  );
};

export default AddPersonalData;
