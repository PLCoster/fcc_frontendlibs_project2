const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          Markdown Previewer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://plcoster.github.io/homepage/"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FreeCodeCamp Projects
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="https://plcoster.github.io/fcc_frontendlibs_project1/"
                  >
                    Quote Generator
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://plcoster.github.io/fcc_frontendlibs_project2/"
                  >
                    Markdown Previewer
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://plcoster.github.io/fcc_frontendlibs_project3/"
                  >
                    Drum Machine
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://plcoster.github.io/fcc_frontendlibs_project4/"
                  >
                    JavaScript Calculator
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://plcoster.github.io/fcc_frontendlibs_project5/"
                  >
                    25 + 5 Clock
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://plcoster.github.io/homepage/projects.html"
              >
                All Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/PLCoster">
                <i className="fa-brands fa-github"></i> Github
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://linkedin.com/in/plcoster">
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
