function Navbar({ currentPage, handlePageChange }) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className='nav-item active'>
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active ' : 'nav-link '}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active ' : 'nav-link '}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active ' : 'nav-link '}>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;