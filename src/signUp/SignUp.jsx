import Input from "../components/input/Input";
import Button from "../components/button/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { createUser } from "../slices/userSlice"
import { userSignUpSchema } from "./signUpValidation";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";

const initialValues = {
    fullName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
}

function SignUP() {

    const [showAndHidePass, setShowAndHidePass] = useState(false)
    const [showAndHideConfPass, setShowAndHideConfPass] = useState(false)

    function showAndHidePswd() {
        setShowAndHidePass(!showAndHidePass)
    }

    function showAndHideConfPswd() {
        setShowAndHideConfPass(!showAndHideConfPass)
    }

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { values, errors, handleChange, touched, handleSubmit, setFieldError } = useFormik({
        initialValues: initialValues,
        validationSchema: userSignUpSchema,
        onSubmit: async (values, action) => {
            try {
                const response = await dispatch(createUser(values)).unwrap();
                if (response.message === "user registered successfully") {
                    action.resetForm();
                    navigate("/logIn");
                }
            } catch (error) {
                console.log(error)
                if (error && error.message) {
                    setFieldError("emailId", error.message);
                }
            }
        }
    })

    console.log(values)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="border-b-2 border-[#e8e9eb] mb-[50px] w-[85%] sm:pt-[12px]">
                <img src={process.env.PUBLIC_URL + "/linkswift.png"} alt="error" className="w-1/3 h-16 sm:w-1/6" />
            </div>
            <div className="text-[34px] mb-[10px] font-semibold text-[#4f565a] w-[85%] flex text-center sm:w-[28rem]">
                <p>Sign up and start shortening</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full sm:w-auto">
                <div className="w-5/6 sm:w-fit mb-[18px]">
                    <label className="text-[#6c6d71]">Full Name:</label>
                    <Input placeholder={"Enter your name"} name={"fullName"} value={values.fullName} onChange={handleChange} className="border border-[#d3d4d7] sm:w-[28rem] w-full px-[11px] py-[10px] rounded-[3px]" />
                    {errors.fullName && touched.fullName ? <p className="text-[#FF0000]">*{errors.fullName}</p> : null}
                </div>
                <div className="w-5/6 sm:w-fit mb-[18px]">
                    <label className="text-[#6c6d71]">Email Address:</label>
                    <Input placeholder={"Enter your email"} name={"emailId"} value={values.emailId} onChange={handleChange} className="border border-[#d3d4d7] sm:w-[28rem] w-full px-[11px] py-[10px] rounded-[3px]" />
                    {errors.emailId && touched.emailId ? <p className="text-[#FF0000]">*{errors.emailId}</p> : null}
                </div>
                <div className="w-5/6 sm:w-fit mb-[18px]">
                    <div className="flex justify-between">
                        <label className="text-[#6c6d71]">Password:</label>
                        <span className="text-[#0352d0] cursor-pointer" onClick={showAndHidePswd}><VisibilityIcon className="text-[#0352d0]" /> {showAndHidePass ? "Hide" : "Show"}</span>
                    </div>
                    <Input type={showAndHidePass ? "text" : "password"} placeholder={"Enter your password"} name={"password"} value={values.password} onChange={handleChange} className="border border-[#d3d4d7] sm:w-[28rem] w-full px-[11px] py-[10px] rounded-[3px]" />
                    {errors.password && touched.password ? <p className="text-[#FF0000] sm:w-[28rem] w-full">*{errors.password}</p> : null}
                </div>
                <div className="w-5/6 sm:w-fit mb-[18px]">
                    <div className="flex justify-between">
                        <label className="text-[#6c6d71]">Confirm Password:</label>
                        <span className="text-[#0352d0] cursor-pointer" onClick={showAndHideConfPswd}><VisibilityIcon className="text-[#0352d0]" /> {showAndHideConfPass ? "Hide" : "Show"}</span>
                    </div>
                    <Input type={showAndHideConfPass ? "text" : "password"} placeholder={"Enter your confirm password"} name={"confirmPassword"} value={values.confirmPassword} onChange={handleChange} className="border border-[#d3d4d7] sm:w-[28rem] w-full px-[11px] py-[10px] rounded-[3px]" />
                    {errors.confirmPassword && touched.confirmPassword ? <p className="text-[#FF0000] sm:w-[28rem] w-full">*{errors.confirmPassword}</p> : null}
                </div>
                <div className="w-5/6 sm:w-fit">
                    <Button type={"submit"} name={"Submit"} className={"bg-[#0352d0] sm:w-[28rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px] text-[16px] font-medium text-white"} />
                    <p className="text-[#6c6d71] sm:w-[28rem] w-full text-center mb-[50px]">Already have an account? <Link to="/logIn" ><span className="text-[#0236b9] font-medium">Login </span></Link>here</p>
                </div>
            </form>
        </div>
    )
}

export default SignUP;
