import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileDropdown from '../components/profileDropdown/ProfileDropdown';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header() {

  let { UserDetail } = useSelector(state => state.user)

  return (
    <div className="shadow-lg sticky top-0 bg-white h-20 sm:px-12 px-6">
      <div className='h-20 flex items-center justify-between'>
      <img src={process.env.PUBLIC_URL + "/website-Logo.png"} alt='error' className='sm:w-1/4 w-[5rem] sm:h-14 h-12 cursor-pointer xl:w-1/6 lg:w-1/6' />
        {UserDetail.length !== 0 ? <div className='sm:text-[2rem] text-[2rem] text-[#E8772E] h-14 flex gap-[1rem]'>
          <ProfileDropdown />
        </div> :
          <Link to="/logIn"><AccountCircleIcon className='sm:!text-[4rem] !text-[3rem] text-[#E8772E] cursor-pointer' /></Link>
        }
      </div>
    </div>
  )
}

export default Header;
