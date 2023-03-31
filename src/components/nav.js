function Navbar({ currentPage, handlePageChange }) {
    return(
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="text-right collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items">
                            <li className="nav-item">
                                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active btn' : 'nav-link btn'}>About me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active btn' : 'nav-link btn'}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active btn' : 'nav-link btn'}>Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active btn' : 'nav-link btn'}>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;