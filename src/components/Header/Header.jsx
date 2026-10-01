import { useState } from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header'>
      <div className="container header__nav">
        <div className="header__nav__brand">
          <span className="header__nav__brand__mark">H</span>
          <span className="header__nav__brand__name">Handsome</span>
        </div>

        <div className={`header__nav__menu ${isMenuOpen ? 'is-open' : ''}`}>
          <Navigation onLinkClick={handleCloseMenu} />
        </div>

        <button className="btn btn-primary header__nav__cta">Записатись</button>

        <button
          type="button"
          className={`nav-icon ${isMenuOpen ? 'open' : ''}`}
          aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;