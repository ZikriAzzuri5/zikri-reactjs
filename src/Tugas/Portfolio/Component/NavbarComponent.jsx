export default function NavbarComponent() {
  return(
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark fixed-top">
        <div className="container flex-lg-column">
          <a className="navbar-brand mx-lg-auto mb-lg-4" href="#">
            <span className="h3 fw-bold d-block d-lg-none">ZA.</span>
            <img src="../src/assets/person.jpg" className="d-none d-lg-block rounded-circle" alt="person image" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
              <li className="nav-link px-lg-3 fw-medium"><a href="#home">Home</a> </li>
              <li className="nav-link px-lg-3 fw-medium"><a href="#services">Services</a></li>
              <li className="nav-link px-lg-3 fw-medium"><a href="#works">Work</a></li>
              <li className="nav-link px-lg-3 fw-medium"><a href="#about">About</a></li>
              <li className="nav-link px-lg-3 fw-medium"><a href="#reviews">Reviews</a></li>
              <li className="nav-link px-lg-3 fw-medium"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}