
function LogOut() {

  function handleClickLogOut(){
    localStorage.clear()
  }

  return (
    <span onClick={()=>handleClickLogOut()}>
      Logout
    </span>
  )
}

export default LogOut;
