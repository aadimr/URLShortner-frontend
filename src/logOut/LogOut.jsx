function LogOut() {

    function handleClickLogOut() {
        localStorage.clear()
    }

    return (
        <div>
        <p onClick={handleClickLogOut}>LogOut</p>
        </div>
    )
}

export default LogOut;