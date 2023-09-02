import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllShortenedUrlsOfLoggedInUser } from '../slices/URLSlice';
import Header from "../header/Header";
import Footer from "../footer/Footer";

function AllShortenedURL() {

    let dispatch = useDispatch()

    let [copied, setCopide] = useState(false)

    let { allURLs,loading } = useSelector(state => state.URL)

    const userDetail = JSON.parse(localStorage.getItem('loggedInUserDetail'));

    const allShortedURLS = allURLs && [...allURLs.data].reverse();
    const recentShortedUrl = allShortedURLS[0]

    const getAllShortenedUrls = async () => {
        await dispatch(getAllShortenedUrlsOfLoggedInUser(userDetail && userDetail.details.userId));
    };

    useEffect(() => {
        getAllShortenedUrls();
    }, [dispatch]);

    if (loading) {
        return <h2 className='text-[#6c6d71] text-[1.5rem] font-semibold flex justify-center items-center h-screen'>Loading...</h2>
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center w-full min-h-screen pt-[6rem]">
                {allShortedURLS.length !== 0 && recentShortedUrl ?
                    <>
                        <div className="w-full flex flex-col justify-center items-center mt-[60px]">
                            <p className="text-[#6c6d71] w-5/6 mb-[.8rem] font-semibold">Your last shortened URL</p>
                            <div className="drop-shadow-lg bg-white min-h-20 w-5/6 mb-[18px] px-[11px] py-[10px] rounded-[3px] flex flex-col sm:flex-row items-center justify-between">
                                <div className='flex flex-col gap-[1rem]'>
                                    <span className='text-black w-full break-all'>shortUrl: <Link to={recentShortedUrl.shortUrl} target="_blank" className='text-[#2a5bd7] hover:underline'>{recentShortedUrl.shortUrl}</Link></span>
                                    <span className='text-black w-full break-all'>longUrl: <Link to={recentShortedUrl.longUrl} target="_blank" className='text-[#2a5bd7] hover:underline'>{recentShortedUrl.longUrl}</Link></span>
                                </div>
                                <CopyToClipboard text={recentShortedUrl.shortUrl}
                                    onCopy={() => setCopide(true)}
                                >
                                    <ContentCopyIcon className="cursor-pointer" />
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-[60px] mb-[50px]" >
                            <p className="text-[#6c6d71] w-5/6 mb-[.8rem] font-semibold">Get your all shortened URLs</p>
                            {allShortedURLS.map((ele, index) => (
                                <div className="drop-shadow-lg bg-white min-h-20 w-5/6 mb-[18px] px-[11px] py-[10px] rounded-[3px] flex flex-col sm:flex-row items-center justify-between" key={index}>
                                    <div className='flex flex-col gap-[1rem]'>
                                        <span className='text-black w-full break-all'>shortUrl: <Link to={ele.shortUrl} target="_blank" className='text-[#2a5bd7] hover:underline'>{ele.shortUrl}</Link></span>
                                        <span className='text-black w-full break-all'>longUrl: <Link to={ele.longUrl} target="_blank" className='text-[#2a5bd7] hover:underline'>{ele.longUrl}</Link></span>
                                    </div>
                                    <CopyToClipboard text={ele.shortUrl}
                                        onCopy={() => setCopide(true)}
                                    >
                                        <ContentCopyIcon className="cursor-pointer" />
                                    </CopyToClipboard>
                                </div>
                            ))}
                        </div>
                    </> : <p className='text-[#6c6d71] text-[1.5rem] font-semibold flex justify-center items-center mt-[15rem]'>Empty</p>}
            </div>
            <Footer />
        </>
    )
}

export default AllShortenedURL
