import './Navigation.scss';

function Navigation({ onLinkClick }) {
    return (
        <nav className="navigation">
            <a href="#about" onClick={onLinkClick}>Про нас</a>
            <a href="#services" onClick={onLinkClick}>Послуги</a>
            <a href="#gallery" onClick={onLinkClick}>Роботи</a>
            <a href="#team" onClick={onLinkClick}>Команда</a>
            <a href="#contact" onClick={onLinkClick}>Контакти</a>
        </nav>
    );
}

export default Navigation;