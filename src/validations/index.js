import * as yup from "yup";

export const personalDataSchema = yup.object().shape({
  firstName: yup.string().required("نام شما برای افزودن تسهیلات الزامی است."),
  lastNameL: yup.string().required("نام خاوادگی شما برای افزودن تسهیلات الزامی است."),
  nationalCode: yup
    .number()
    .min(10, "کد ملی باید 10 رقمی باشد.")
    .max(10, "کد ملی باید 10 رقمی باشد.")
    .required("کد ملی شما برای افزودن تسهیلات الزامی است."),
  phoneNumber: yup.number().required("شماره همراه شما برای افزودن تسهیلات الزامی است."),
  birthDate: yup.date().required("تاریخ تولد شما برای افزودن تسهیلات الزامی است."),
});
