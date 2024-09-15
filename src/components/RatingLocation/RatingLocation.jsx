import starIcon from '../../assets/icons/star.svg';
import mapIcon from '../../assets/icons/Map.svg';
import styles from './RatingLocation.module.css';

const RatingLocation = ({ rating, reviewCount, location }) => {
    const locationParts = location.split(', ').reverse().join(', ');

    return (
        <div className={styles.ratingLocation}>
            <div className={styles.rating}>
                <img src={starIcon} className={styles.starIcon} alt="Rating" />
                <span className={styles.ratingText}>{`${rating} (${reviewCount} Reviews)`}</span>
            </div>
            <div className={styles.locationSection}>
                <img src={mapIcon} alt="Map icon" className={styles.inputIcon} />
                <div className={styles.location}>{locationParts}</div>
            </div>
        </div>
    );
};

export default RatingLocation;