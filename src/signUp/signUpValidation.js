import * as Yup from "yup";
const regName = /^[A-Za-z]+(?: [A-Za-z]+)*$/
const regPswd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]{8,50}$/

export const userSignUpSchema = Yup.object({
    fullName: Yup.string().min(2, "Name must be at least 2 characters").matches(regName, "Must be alphabet").required("Please enter your name"),
    emailId: Yup.string().email("email must be a valid email").required("Please enter your email"),
    password: Yup.string().matches(regPswd, "password must contain at least one uppercase letter, one lowercase letter, one digit and one special character and the length must be between 8 to 50 characters").required("Please enter your password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Please enter your confirm password"),
});