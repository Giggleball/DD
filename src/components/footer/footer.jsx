import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link footer__link" href="mailto:desirabledishes@hotmail.nl">Mail</a>
            </li>
            <li className="nav-item nav-link footer__link">
                <Link to="/">&copy; 2017 Desirable Dishes</Link>
            </li>
            <li className="nav-item nav-link footer__link">
                <Link to="/faq">FAQ</Link>
            </li>
        </ul>
    </div>
);

export default Footer
