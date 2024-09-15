import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/icons/TravelTrucks.svg';

const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="TravelTrucks" />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link 
                            to="/" 
                            className={location.pathname === '/' ? styles.active : ''}
                            >
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/catalog"
                                className={location.pathname.startsWith('/catalog') ? styles.active : ''}
                            >
                                Catalog
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
        </header>
    );
};

export default Header;
