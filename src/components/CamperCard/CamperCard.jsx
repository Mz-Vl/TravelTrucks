// CamperCard.jsx
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../../redux/campersSlice';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.campers.favorites);
    const isFavorite = favorites.includes(camper.id);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(camper.id));
    };

    return (
        <div className={styles.camperCard}>
            <img src={camper.gallery[0].thumb} alt={camper.name} className={styles.camperImage} />
            <h3>{camper.name}</h3>
            <p className={styles.price}>€{camper.price.toFixed(2)}</p>
            <p className={styles.location}>{camper.location}</p>
            <button onClick={handleToggleFavorite} className={styles.favoriteButton}>
                {isFavorite ? '❤️' : '🤍'}
            </button>
            <Link to={`/catalog/${camper.id}`} target="_blank" className={styles.showMoreButton}>
                Show more
            </Link>
        </div>
    );
};

export default CamperCard;