const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Markdown Previewer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <button
                type="button"
                className="btn btn-sm btn-info m-2"
                onClick={handleEditorUndo}
                disabled={editorHistory.prev ? false : true}
              >
                Undo
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-sm btn-info m-2"
                onClick={handleEditorRedo}
                disabled={editorHistory.next ? false : true}
              >
                Redo
              </button>
            </li> */}
          </ul>
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <button
                type="button"
                className="btn btn-sm btn-primary m-2"
                onClick={handleEditorSave}
              >
                Save
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-sm btn-warning m-2"
                onClick={handleEditorLoad}
              >
                Load
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-sm btn-danger m-2"
                onClick={handleEditorClear}
              >
                Clear
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
