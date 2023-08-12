import Button from '../components/button/Button';
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className='xl:px-[12rem] lg:px-[8rem] md:px-[8rem] h-auto sm:px-[5rem] px-[1rem] py-10 flex flex-col gap-10'>
            <p className=' text-xl text-[#E8772E]'>In a world where sharing information is crucial, we understand the value of simplicity and efficiency. Introducing <span className='text-[#BA3B0A] font-medium'>LinkSwift</span> – the ultimate URL shortener that streamlines your online sharing experience like never before.
                Long and cumbersome URLs are a thing of the past. With <span className='text-[#BA3B0A] font-medium'>LinkSwift</span>, you can effortlessly transform those lengthy web addresses into short, elegant, and easy-to-share links. Whether you're sharing articles, products, or social media posts, our powerful tool empowers you to communicate with precision and speed.
                Step into the world of effortless sharing. Just sign up for your free <span className='text-[#BA3B0A] font-medium'>LinkSwift</span> account and start shortening URLs right away. Whether you're a marketer, blogger, or social media enthusiast, <span className='text-[#BA3B0A] font-medium'>LinkSwift</span> is the tool you need to supercharge your online presence.
            </p>
            <div className={"flex gap-4 justify-center"}>
                <Link to="/singUp"><Button name={"SingUp"} className={"border-none w-[7rem] h-[2.5rem] font-medium text-lg bg-[#BA3B0A] text-white"} /></Link>
                <Button name={"LogIn"} className={"border border-[#BA3B0A] w-[7rem] h-[2.5rem] font-medium text-lg text-[#BA3B0A]"} />
            </div>
        </div>
    )
}

export default LandingPage;
