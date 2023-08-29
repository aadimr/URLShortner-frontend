import Input from "../components/input/Input";
import { useFormik } from "formik";
import clipboardCopy from 'clipboard-copy';
import { useDispatch } from 'react-redux';
import { shortURL } from "../slices/URLSlice";
import { URLSchema } from "./URLSchema.js";

const initialValues = {
    userId: "",
    urlCode: "",
    longUrl: "",
    shortUrl: "",
}

function Home() {

    // function handleCopy(){
    //     clipboardCopy(textToCopy)
    //       .then(() => {
    //         alert('Text copied to clipboard');
    //       })
    //       .catch((err) => {
    //         console.error('Copy to clipboard failed: ', err);
    //       });
    //   };
    const dispatch = useDispatch()

    const { values, handleBlur, errors, handleChange, touched, handleSubmit, setFieldError } = useFormik({
        initialValues: initialValues,
        validationSchema: URLSchema,
        onSubmit: async (values, action) => {
            // try {
            //     const response = await dispatch(shortURL(values));
            //     if (response.status === true) {
            //         localStorage.shortURL()
            //         // const authDataString = JSON.parse(localStorage.getItem('auth'));
            //         // dispatch(getloggedInUserDetails(authDataString.token));
            //         action.resetForm();
            //         // navigate("/");
            //     }
            // } catch (error) {
            //     console.log(error)
            //     if (error && error.message) {
            //         setFieldError("password", "Email or Password is wrong");
            //     }
            // }
        }
    })

    return (
        <div className="flex flex-col items-center min-h-screen pt-[100px]">
            <p className="font-bold text-[2rem] text-[#4f565a] mb-[40px] md:w-[40rem] w-5/6">Create new</p>
            <form className="flex flex-col items-center w-full md:w-auto">
                <div className="w-5/6 flex flex-col justify-center md:w-fit">
                    <label className="text-[#6c6d71] w-full w-5/6 mb-[.8rem] font-semibold">Destination</label>
                    <Input placeholder={"https://example.com/my-long-url"} 
                    name={"user_Name"} value={values.user_Name} onChange={handleChange} onBlur={handleBlur} 
                    className="border border-[#d3d4d7] md:w-[40rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px]"/>
                    {errors.user_Name && touched.user_Name ? <p>*{errors.user_Name}</p> : null}
                </div>
            </form>
            <div className="w-5/6 flex flex-col justify-center md:w-fit mt-[40px]">
                <p className="text-[#6c6d71] w-full w-5/6 mb-[.8rem] font-semibold">Get your shortened URL</p>
                <div className="drop-shadow-lg bg-white h-20 md:w-[40rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px] flex items-center">okokok</div>
            </div>
        </div>
    )
}

export default Home;
