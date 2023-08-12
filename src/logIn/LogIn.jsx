import Input from "../components/input/Input";
import Button from "../components/button/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
    fullName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
}

function LogIn() {
    const { values, handleBlur, errors, handleChange, touched, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values, action) => {
        }
    })


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="border-b-2 border-[#e8e9eb] mb-[90px] w-[85%] sm:pt-[12px]">
                <img src={process.env.PUBLIC_URL + "/linkswift.png"} alt="error" className="w-1/3 h-16 sm:w-1/6" />
            </div>
            <div className="text-[34px] mb-[10px] font-semibold text-[#4f565a] w-[85%] flex text-center sm:w-[28rem]">
                <p>Sign up and start shortening</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full sm:w-auto">
                {/* <div className="w-5/6 sm:w-fit">
                    <label className="text-[#6c6d71]">Full Name:</label>
                    <Input placeholder={"Enter your name"} name={"user_Name"} value={values.user_Name} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] sm:w-[28rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px]" />
                    {errors.user_Name && touched.user_Name ? <p>*{errors.user_Name}</p> : null}
                </div> */}
                <div className="w-5/6 sm:w-fit">
                    <label className="text-[#6c6d71]">Email Address:</label>
                    <Input placeholder={"Enter your email"} name={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] sm:w-[28rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px]" />
                    {errors.email && touched.email ? <p >*{errors.email}</p> : null}
                </div>
                <div className="w-5/6 sm:w-fit">
                    <div className="flex justify-between">
                        <label className="text-[#6c6d71]">Password:</label>
                        <span className="text-[#0352d0]"><VisibilityIcon className="text-[#0352d0]" /> show</span>
                    </div>
                    <Input type={"password"} placeholder={"Enter your password"} name={"password"} value={values.password} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] sm:w-[28rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px]" />
                    {errors.password && touched.password ? <p >*{errors.password}</p> : null}
                </div>
                {/* <div className="w-5/6 sm:w-fit">
                    <div className="flex justify-between">
                        <label className="text-[#6c6d71]">Confirm Password:</label>
                        <span className="text-[#0352d0]"><VisibilityIcon className="text-[#0352d0]" /> show</span>
                    </div>
                    <Input type={"password"} placeholder={"Enter your confirm password"} name={"confirm_Password"} value={values.confirm_Password} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] sm:w-[28rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px]" />
                    {errors.confirm_Password && touched.confirm_Password ? <p >*{errors.confirm_Password}</p> : null}
                </div> */}
                <div className="w-5/6 sm:w-fit">
                    <Button type={"submit"} name={"Submit"} className={"bg-[#0352d0] sm:w-[28rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px] text-[16px] font-medium text-white"} />
                    <p className="text-[#6c6d71] sm:w-[28rem] w-full text-center mb-[50px]">Already have an account? <Link to="/logIn" ><span className="text-[#0236b9] font-medium">Login </span></Link>here</p>
                </div>
            </form>
        </div>
    )
}

export default LogIn;
