import Input from "../components/input/Input";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { shortURL } from "../slices/URLSlice";
import { URLSchema } from "./URLSchema.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    let navigate = useNavigate()

    const userDetail = JSON.parse(localStorage.getItem('loggedInUserDetail'));

    const initialValues = {
        userId: userDetail && userDetail.details.userId,
        urlCode: "",
        longUrl: "",
        shortUrl: "",
    }

    const dispatch = useDispatch()

    const { values, handleBlur, errors, handleChange, touched, handleSubmit, setFieldError } = useFormik({
        initialValues: initialValues,
        validationSchema: URLSchema,

        onSubmit: async (values) => {
            try {
                const response = await dispatch(shortURL(values)).unwrap();
                if (response.status === true) {
                    navigate("/allShortenedURL")
                }
            } catch (error) {
                if (error && error.message) {
                    setFieldError("longUrl", "Error! Link Not Found");
                }
            }
        }
    })

    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSubmit();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen pt-[10rem]">
            <p className="font-bold text-[2rem] text-[#4f565a] mb-[40px] md:w-[40rem] w-5/6">Create new</p>
            <form className="flex flex-col items-center w-full md:w-auto" onSubmit={handleSubmit}>
                <div className="w-5/6 flex flex-col justify-center md:w-fit">
                    <label className="text-[#6c6d71] w-5/6 mb-[.8rem] font-semibold">Destination</label>
                    <Input placeholder={"https://example.com/my-long-url"}
                        name={"longUrl"} value={values.longUrl} onChange={handleChange} onBlur={handleBlur}
                        className="border border-[#d3d4d7] md:w-[40rem] w-full px-[11px] py-[10px] rounded-[3px]" />
                    <p>Hit <span className="font-medium">ENTER</span> to quick create</p>
                    {errors.longUrl && touched.longUrl ? <p className="text-[#FF0000]">*{errors.longUrl}</p> : null}
                </div>
            </form>
        </div>
    )
}

export default Home;
