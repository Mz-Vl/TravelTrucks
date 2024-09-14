// TitleSection.jsx
import heartIcon from '../../assets/icons/heartDefault.svg';
import heartSelectedIcon from '../../assets/icons/heartSelected.svg';
import styles from './TitleSection.module.css';

const TitleSection = ({ name, price, isFavorite, onFavoriteToggle }) => (
    <div className={styles.titleSection}>
        <h3 className={styles.camperTitle}>{name}</h3>
        <div className={styles.rightSection}>
            <span className={styles.price}>{`€${price.toFixed(2)}`}</span>
            <button onClick={onFavoriteToggle} className={styles.favoriteButton}>
                <img 
                    className={styles.heartIcon} 
                    src={isFavorite ? heartSelectedIcon : heartIcon} 
                    alt="Favorite" 
                />
            </button>
        </div>
    </div>
);

export default TitleSection;