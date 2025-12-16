import { Link, Outlet, useNavigate } from 'react-router'


const pages = ["/counter", "/timer", "/joke", "/theme"]

function NavBar() {
    const navigate = useNavigate()

    function navigateRandomPage() {
        const random = Math.floor(Math.random() * pages.length)
        navigate(pages[random])
    }

    return (
        <>
      <div style={{marginTop : "1rem"}}>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/timer">Timer</Link></li>
            <li><Link to="/joke">Joke</Link></li>
            <li><Link to="/theme">Theme</Link></li>
            <li><Link to="/userCard">blogCard</Link></li>
            <li><Link to="/formulaire">formulaire</Link></li>
            <li><Link to="/yathzee">yathzee</Link></li>

            <li><p onClick={() => {navigateRandomPage()}}>Random</p></li>
          </ul>
        </nav>
        <main>
          <h1>App</h1>
          <Outlet />
        </main>
      </div>
    </>

    )
    
    
}

export default NavBar