// Header.jsx
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">Travel<span>Trucks</span></Link>
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
