import { Link } from 'react-router-dom';

import Logo from '../../../assets/img/sports/logo.svg'
export const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<Link to="/enhome" className="navbar-brand"><img src={Logo} className='img-fluid ks-logo' /></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Link to="/enhome" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/userslist" className="nav-link">Users List</Link>
      </li>
      <li className="nav-item">
      <Link to="/addusers" className="nav-link">Add User</Link>
      </li>
    </ul>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-normal">
      <li className="nav-item">
      <Link to="/mlhome" className="nav-link">aebmfw</Link>
      </li>
    </ul>
  </div>
</div>
</nav>

  )
}
