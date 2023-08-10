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

function SingUP() {
    const { values, handleBlur, errors, handleChange, touched, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values, action) => {
        }
    })


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="border-b-2 border-[#e8e9eb] mb-[50px] w-[85%] pt-[12px]">
                <img src={process.env.PUBLIC_URL + "/linkswift.png"} alt="error" className="w-1/5 xl:w-1/6 h-16 lg:w-1/6"/>
            </div>
            <div className="text-[34px] mb-[10px] font-semibold text-[#4f565a] xsm:w-[25rem] xsm:text-center">
                <p>Sign up and start shortening</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="text-[#6c6d71]">Full Name:</label>
                    <Input placeholder={"Enter your name"} name={"user_Name"} value={values.user_Name} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] w-[28rem] mb-[18px] px-[11px] py-[10px] rounded-[3px] xsm:w-[25rem]" />
                    {errors.user_Name && touched.user_Name ? <p>*{errors.user_Name}</p> : null}
                </div>
                <div >
                    <label className="text-[#6c6d71]">Email Address:</label>
                    <Input placeholder={"Enter your email"} name={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] w-[28rem] mb-[18px] px-[11px] py-[10px] rounded-[3px] xsm:w-[25rem]" />
                    {errors.email && touched.email ? <p >*{errors.email}</p> : null}
                </div>
                <div >
                    <div className="flex justify-between xsm:w-[25rem]">
                        <label className="text-[#6c6d71]">Password:</label>
                        <span className="text-[#0352d0]"><VisibilityIcon className="text-[#0352d0]"/> show</span>
                    </div>
                    <Input type={"password"} placeholder={"Enter your password"} name={"password"} value={values.password} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] w-[28rem] mb-[18px] px-[11px] py-[10px] rounded-[3px] xsm:w-[25rem]" />
                    {errors.password && touched.password ? <p >*{errors.password}</p> : null}
                </div>
                <div >
                    <div className="flex justify-between xsm:w-[25rem]">
                        <label className="text-[#6c6d71]">Confirm Password:</label>
                        <span className="text-[#0352d0]"><VisibilityIcon className="text-[#0352d0]"/> show</span>
                    </div>
                    <Input type={"password"} placeholder={"Enter your confirm password"} name={"confirm_Password"} value={values.confirm_Password} onChange={handleChange} onBlur={handleBlur} className="border border-[#d3d4d7] w-[28rem] mb-[18px] px-[11px] py-[10px] rounded-[3px] xsm:w-[25rem]" />
                    {errors.confirm_Password && touched.confirm_Password ? <p >*{errors.confirm_Password}</p> : null}
                </div>
                <div >
                    <Button type={"submit"} name={"Submit"} className={"bg-[#0352d0] w-[28rem] mb-[18px] px-[11px] py-[10px] rounded-[3px] text-[16px] font-medium text-white xsm:w-[25rem]"} />
                    <p className="text-[#6c6d71] w-[28rem] flex justify-center mb-[50px] xsm:w-[25rem]">Already have an account? <Link to="/logIn" ><span className="text-[#0236b9] font-medium">Login</span></Link>here</p>
                </div>
            </form>
        </div>
    )
}

export default SingUP;
