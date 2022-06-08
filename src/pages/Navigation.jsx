import { Outlet } from 'react-router-dom'
import './navigation.css';

const Navigation = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <h1>
          <a href="/#home">
            Abode Group
          </a>
        </h1>
        <nav> 
          <ul>
            <li>
              <a href="/all-properties">View All Properties</a>
            </li>
            <li>
              <a href="/#area-info">Area Info</a>
            </li>
            <li>
              <a href="/#about-us">About Us</a>
            </li>
            <li>
              <a href="/guide">Guest Guide</a>
            </li>
            <li>
              <a href='/admin'>Admin</a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <Outlet />
    </>
  );
}

export default Navigation;