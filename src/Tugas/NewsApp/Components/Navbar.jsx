import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  handleInputChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      // eslint-disable-next-line react/prop-types
      this.props.onSearch(this.state.searchQuery);
    });
  };

  render() {
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
                    value={this.state.searchQuery}
                    onChange={this.handleInputChange}
                    id="search-input"
                  />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
