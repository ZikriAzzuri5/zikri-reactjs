const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid d-flex justify-content-between">
          <div className="navbar__title">
            <a className="navbar-brand" href="#">
              News App
            </a>
          </div>
          <div className="navbar__search">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex" role="search" id="search-form">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
