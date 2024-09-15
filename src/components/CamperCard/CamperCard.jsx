import { useState, useEffect } from 'react';
import CamperImage from '../CamperImage/CamperImage';
import CamperDetails from '../CamperDetails/CamperDetails';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favoriteCampers')) || [];
        if (savedFavorites.includes(camper.id)) {
            setIsFavorite(true);
        }
    }, [camper.id]);

    const handleFavoriteToggle = () => {
        const savedFavorites = JSON.parse(localStorage.getItem('favoriteCampers')) || [];
        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = savedFavorites.filter(favId => favId !== camper.id);
        } else {
            updatedFavorites = [...savedFavorites, camper.id];
        }

        localStorage.setItem('favoriteCampers', JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <CamperImage imageUrl={camper.gallery[0].thumb} name={camper.name} />
            <CamperDetails 
                camper={camper} 
                isFavorite={isFavorite} 
                onFavoriteToggle={handleFavoriteToggle} 
            />
        </div>
    );
};

export default CamperCard;