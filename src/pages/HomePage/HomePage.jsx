import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <h1>Welcome to TravelTrucks</h1>
            <p>Find the perfect camper for your adventure</p>
            <Link to="/catalog" className={styles.viewNowButton}>View Now</Link>
        </div>
    );
};

export default HomePage;