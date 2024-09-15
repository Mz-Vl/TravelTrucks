import TitleSection from '../TitleSection/TitleSection';
import RatingLocation from '../RatingLocation/RatingLocation';
import FeaturesList from '../FeaturesList/FeaturesList';

import Button from '../Button/Button';
import styles from './CamperDetails.module.css';

const CamperDetails = ({ camper, isFavorite, onFavoriteToggle }) => {
    const truncatedDescription = camper.description.length > 62
        ? camper.description.slice(0, 62) + '...'
        : camper.description;

    return (
        <div className={styles.details}>
            <TitleSection 
                name={camper.name} 
                price={camper.price} 
                isFavorite={isFavorite} 
                onFavoriteToggle={onFavoriteToggle} 
            />
            <RatingLocation 
                rating={camper.rating} 
                reviewCount={camper.reviews.length} 
                location={camper.location} 
            />
            <p className={styles.description}>{truncatedDescription}</p>
            <div className={styles.features}><FeaturesList camper={camper} /></div>
            
            <Button to={`/catalog/${camper.id}`} target="_blank">
                Show more
            </Button>
        </div>
    );
};

export default CamperDetails;