import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("auth"))
    return(
        !isLoggedIn ? <Navigate to="/login"/> : <Outlet/>
    )
}

export const PrivateRoutesForLogInAndSingUp = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("auth"))
    return(
        isLoggedIn ? <Navigate to="/"/> : <Outlet/>
    )
}



export default PrivateRoutes;