import Input from "../components/input/Input";
import Button from "../components/button/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { logInUser, getloggedInUserDetails } from "../slices/userSlice";
import { userLogInSchema } from "./logInValidation";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";

const initialValues = {
    emailId: "",
    password: "",
}

function LogIn() {

    const [showAndHide, setShowAndHide] = useState(false)

    function showAndHidePswd() {
        setShowAndHide(!showAndHide)
    }

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { values, handleBlur, errors, handleChange, touched, handleSubmit, setFieldError } = useFormik({
        initialValues: initialValues,
        validationSchema: userLogInSchema,
        onSubmit: async (values, action) => {
            try {
                const response = await dispatch(logInUser(values)).unwrap();
                if (response.status === true) {
                    localStorage.setItem('auth', JSON.stringify({ token: response.data.token }))
                    const authDataString = JSON.parse(localStorage.getItem('auth'));
                    dispatch(getloggedInUserDetails(authDataString.token));
                    action.resetForm();
                    navigate("/");
                }
            } catch (error) {
                console.log(error)
                if (error && error.message) {
                    setFieldError("password", "Email or Password is wrong");
                }
            }
        }
    })

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="border-b-2 border-[#e8e9eb] mb-[90px] w-[85%] sm:pt-[12px]">
                <img src={process.env.PUBLIC_URL + "/linkswift.png"} alt="error" className="w-1/3 h-16 sm:w-1/6" />
            </div>
            <div className="text-[34px] mb-[10px] font-semibold text-[#4f565a] w-[85%] flex text-center sm:justify-center sm:w-[28rem]">
                <p>Log in and start sharing</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full sm:w-auto">
                <div className="w-5/6 sm:w-fit mb-[18px]">
                    <label className="text-[#6c6d71]">Email Address:</label>
                    <Input placeholder={"Enter your email"} name={"emailId"} value={values.emailId} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] sm:w-[28rem] w-full px-[11px] py-[10px] rounded-[3px]" />
                    {errors.emailId && touched.emailId ? <p className="text-[#FF0000]">*{errors.emailId}</p> : null}
                </div>
                <div className="w-5/6 sm:w-fit mb-[18px]">
                    <div className="flex justify-between">
                        <label className="text-[#6c6d71]">Password:</label>
                        <span className="text-[#0352d0] cursor-pointer" onClick={showAndHidePswd}><VisibilityIcon className="text-[#0352d0]" /> {showAndHide ? "Hide" : "Show"}</span>
                    </div>
                    <Input type={showAndHide ? "text" : "password"} placeholder={"Enter your password"} name={"password"} value={values.password} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] sm:w-[28rem] w-full px-[11px] py-[10px] rounded-[3px]" />
                    {errors.password && touched.password ? <p className="text-[#FF0000]">*{errors.password}</p> : null}
                </div>
                <div className="w-5/6 sm:w-fit">
                    <Button type={"submit"} name={"Submit"} className={"bg-[#0352d0] sm:w-[28rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px] text-[16px] font-medium text-white"} />
                    <p className="text-[#6c6d71] sm:w-[28rem] w-full text-center mb-[50px]">Don’t have an account?<Link to="/signUp"><span className="text-[#0236b9] font-medium">SignUp</span></Link> here</p>
                </div>
            </form>
        </div>
    )
}

export default LogIn;
