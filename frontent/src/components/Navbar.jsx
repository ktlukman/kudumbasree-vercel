export const Navbar = ({toWorkarea, toHomearea, toAboutarea, workAct, homeAct, aboutAct}) => {
 
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg nav-customcss">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <button onClick={toHomearea} className={`nav-link ${homeAct ? 'active' : ''}`} type="button">Home</button>
        </li>
        <li className="nav-item">
          <button onClick={toWorkarea} className={`nav-link ${workAct ? 'active' : ''}`} type="button">Work</button>
        </li>
        <li className="nav-item">
          <button onClick={toAboutarea} className={`nav-link ${aboutAct ? 'active' : ''}`} type="button">About</button>
        </li>
      </ul>
    </div>
  </div>
</nav>




    </>
  )
}
