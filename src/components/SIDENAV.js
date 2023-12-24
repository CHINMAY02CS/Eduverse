import React from 'react'

const SIDENAV = () => {
  return (
    <>
      {/* Main Navigation */}
      <header>
        {/* Sidebar */}
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
              </a>
              {/* ... (rest of the list items) ... */}
            </div>
          </div>
        </nav>
        {/* Sidebar */}

        {/* Navbar */}
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Brand */}
            <a className="navbar-brand" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="25"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* Search form */}
            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder='Search (ctrl + "/" to focus)'
                style={{ minWidth: '225px' }}
              />
              <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
            </form>

            {/* Right links */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* ... (rest of the navbar items) ... */}
            </ul>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </header>
      {/* Main Navigation */}

      {/* Main layout */}
      <main style={{ marginTop: '58px' }}>
        <div className="container pt-4"></div>
      </main>
      {/* Main layout */}
    </>
  )
}

export default SIDENAV
