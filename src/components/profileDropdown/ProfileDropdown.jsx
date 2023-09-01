import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { pagesName } from './LinkData';

function DrawerNavbar() {

    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pagesName.map((ele, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={ele.to}>
                            <ListItemButton className='w-screen'>
                                <ListItemIcon>
                                    <span>{ele.icon}</span>
                                </ListItemIcon>
                                <ListItemText>
                                    {ele.name}
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const userDetail = JSON.parse(localStorage.getItem('loggedInUserDetail'));

    return (
        <div >
            {['top'].map((anchor) => (
                <div key={anchor}>
                    <div className='text-[#E8772E] h-14 cursor-pointer flex gap-[1rem]' onClick={toggleDrawer(anchor, true)}>
                        <span className='w-[3.5rem] bg-[#E8772E] text-[1.5rem] text-white rounded-full flex justify-center items-center'>
                            {userDetail && userDetail.details.userName[0].toUpperCase()}
                        </span>
                        <span className='md:text-[1.5rem] md:flex md:items-center hidden'>{userDetail && userDetail.details.userName}</span>
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{ width: "1000px" }}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
        </div>
    );
}

export default DrawerNavbar;