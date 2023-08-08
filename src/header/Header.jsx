import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="shadow-lg sticky top-0 bg-white h-20 px-24">
       <div className='h-20 flex items-center justify-between'>
        <img src={process.env.PUBLIC_URL + "/website-Logo.png"} alt='error' className='w-1/6 h-14 cursor-pointer'/>
        <AccountCircleIcon className='!text-[4rem] text-[#E8772E] cursor-pointer'/>
       </div>
    </div>
  )
}

export default Header