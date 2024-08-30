import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { Buttons } from "../UI";

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
          <input type="text" name="firstName" id="firstName" className="input" />
        </div>

        {/* last name */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)]">
          <label htmlFor="lastName" className="font-medium text-base text-[#222]">
            نام خانوادگی
          </label>
          <input type="text" name="lastName" id="lastName" className="input" />
        </div>

        {/* national code */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="nationalCode" className="font-medium text-base text-[#222]">
            کد ملی
          </label>
          <input type="text" name="nationalCode" id="nationalCode" className="input" />
        </div>

        {/* phone number */}
        <div className="flex flex-col gap-2 items-start w-full md:w-[calc(50%-0.5rem)] mt-2">
          <label htmlFor="phoneNumber" className="font-medium text-base text-[#222]">
            شماره تماس
          </label>
          <input type="text" name="phoneNumber" id="phoneNumber" className="input" />
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
      <Buttons nextStep={nextStep} />
    </>
  );
};

export default AddPersonalData;
