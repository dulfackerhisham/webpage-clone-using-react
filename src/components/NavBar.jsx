const NavBar = () => {

    return (
        <nav className='nav-bar'>
        <div className="logo">
          <img src="../public/images/d5389cc06b9d40c646878c60ac4bf7ed.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button className='login-btn'>Login</button>

      </nav>
    )
}

export default NavBar