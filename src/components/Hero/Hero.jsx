import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={`${styles.container1} ${styles.heroContent}`}>
                <h1 className={styles.mainHeader}>Campers of your dreams</h1>
                <p className={styles.headerText}>You can find everything you want in our catalog</p>
                <Button to="/catalog">View Now</Button>
            </div>
        </div>
    );
};

export default Hero;