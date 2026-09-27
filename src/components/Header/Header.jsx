import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className="container header__nav">
        <div className="header__nav__brand">
          <span className="header__nav__brand__mark">H</span>
          <span className="header__nav__brand__name">Handsome</span>
        </div>
        <nav className="header__nav__links">
          <a href="#about">Про нас</a>
          <a href="#services">Послуги</a>
          <a href="#gallery">Роботи</a>
          <a href="#team">Команда</a>
          <a href="#contact">Контакти</a>
        </nav>
        <button className="btn btn-primary">Записатись</button>
      </div>
    </header>
  );
}

export default Header;