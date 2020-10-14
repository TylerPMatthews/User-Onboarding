// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "username must be 3 character"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  username: yup
    .string()
    .required('Username is required'),
    password: yup
    .string()
    .required('Password is required'),
    termsofservice: yup.boolean(),
 
});

