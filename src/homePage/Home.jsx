import Input from "../components/input/Input";

function Home() {
    return (
        <div className="flex flex-col items-center h-screen pt-[100px]">
            <p className="font-bold text-[2rem] text-[#4f565a] mb-[40px] md:w-[40rem] w-5/6">Create new</p>
            <form className="flex flex-col items-center w-full md:w-auto">
                <div className="w-5/6 flex flex-col justify-center md:w-fit">
                    <label className="text-[#6c6d71] w-full w-5/6 mb-[.8rem] font-semibold">Destination</label>
                    <Input placeholder={"https://example.com/my-long-url"} 
                    // name={"user_Name"} value={values.user_Name} onChange={handleChange} onBlur={handleBlur} 
                    className="border border-[#d3d4d7] md:w-[40rem] w-full mb-[18px] px-[11px] py-[10px] rounded-[3px]" />
                    {/* {errors.user_Name && touched.user_Name ? <p>*{errors.user_Name}</p> : null} */}
                </div>
            </form>
        </div>
    )
}

export default Home;
