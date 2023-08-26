import { useState, useRef, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import { Link,useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';

function ProfileDropdown() {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleClickLogOut(){
        localStorage.clear()
        navigate("/logIn")
      }

    let { UserDetail } = useSelector(state => state.user)

    return (
        <div >
            <div ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className='text-[#E8772E] h-14 cursor-pointer flex gap-[1rem]'
            >
                <span
                    className='w-[3.5rem] bg-[#E8772E] text-[1.5rem] text-white rounded-full flex justify-center items-center'>{UserDetail[0].data.fullName[0]}
                </span>
                <span className='text-[1.5rem] flex items-center'>{UserDetail[0].data.fullName}</span>
            </div>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                className="w-[16rem]"
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                    >
                        <Paper className="mt-[1rem]">
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <Link to={"/"}><MenuItem onClick={handleClose} className="h-[3rem] !text-[1.5rem]">{UserDetail[0].data.fullName}</MenuItem></Link>
                                    <Divider/>
                                    <MenuItem onClick={handleClose} className="h-[3rem]">My Shortened URLs</MenuItem>
                                    <Divider/>
                                    <MenuItem onClick={handleClickLogOut} className="h-[3rem]">Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

export default ProfileDropdown;