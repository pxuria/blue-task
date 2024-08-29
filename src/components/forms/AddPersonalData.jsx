const AddPersonalData = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4 mt-6">
      {/* first name */}
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

      {/* last name */}
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

      {/* national code */}
      <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
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
      <div className="flex flex-col gap-2 items-start w-[calc(50%-0.5rem)] mt-2">
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
    </div>
  );
};

export default AddPersonalData;
