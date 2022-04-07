import * as yup from "yup";

const signupSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

export interface ISignUp extends yup.InferType<typeof signupSchema> {}

export default signupSchema;
