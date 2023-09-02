import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import LogOut from '../../logOut/LogOut';

export const pagesName = [
    { to: "/", name: "Home", icon: <HomeIcon sx={{ fontSize: "2rem", color: "#E8772E" }} /> },
    { to: "/allShortenedURL", name: "My Shortened URLs", icon: <LinkIcon sx={{ fontSize: "2rem", color: "#E8772E" }} />, },
    { to: "/logIn", name: <LogOut/>, icon: <LogoutIcon sx={{ fontSize: "2rem", color: "#E8772E" }} /> },
] 