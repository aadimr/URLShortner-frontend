import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import LogOut from '../../logOut/LogOut';

export const pagesName = [
    { to: "/", name: "Home", icon: <HomeIcon sx={{ fontSize: "2rem", color: "#3E8ED0" }} /> },
    { to: "/allShortenedURL", name: "My Shortened URLs", icon: <LinkIcon sx={{ fontSize: "2rem", color: "#3E8ED0" }} />, },
    { to: "/logIn", name: <LogOut/>, icon: <LogoutIcon sx={{ fontSize: "2rem", color: "#3E8ED0" }} /> },
] 