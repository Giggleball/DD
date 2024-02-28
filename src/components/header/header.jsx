import {Link} from 'react-router-dom';
import menuItems from './menu-items';
import logo from '../../assets/img/logo-klein.png';

const NavbarItems = ({items}) => {
    return (
        <ul className="header__items d-flex">
            {items.map((item, index) => (
                <li className="nav-item" key={index}>
                    <Link to={item.link} className="nav-link">{item.label}</Link>
                </li>
            ))}
        </ul>
    );
};

const Header = () => (
    <>
        <nav className="navbar navbar-light ">
            <div className="header container-fluid">
                <a className="navbar-brand header__logo" href="/" aria-label="Desirable dishes logo">
                    <img className="header__logo-img" src={logo} alt="logo"/>
                </a>
                <NavbarItems items={menuItems}></NavbarItems>
            </div>
        </nav>
    </>
);

export default Header
