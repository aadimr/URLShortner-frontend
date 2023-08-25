import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ShowAndHide({children}) {

  const location = useLocation()
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(false)

  useEffect(() => {
    if(location.pathname === "/signUp" || location.pathname === "/logIn"){
        setShowHeaderAndFooter(false)
    }else{
        setShowHeaderAndFooter(true)
    }
  },[location])

  return (
    <div>
      {showHeaderAndFooter && children}
    </div>
  )
}

export default ShowAndHide;