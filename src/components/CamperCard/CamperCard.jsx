// CamperCard.jsx
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






































// import { useState, useEffect } from 'react';
// import Button from '../Button/Button';
// import styles from './CamperCard.module.css';
// import heartIcon from '../../assets/icons/heartDefault.svg';
// import heartSelectedIcon from '../../assets/icons/heartSelected.svg';
// import starIcon from '../../assets/icons/star.svg';
// import automaticIcon from '../../assets/icons/gearBox.svg';
// import kitchenIcon from '../../assets/icons/kitchen.svg';
// import acIcon from '../../assets/icons/ac.svg';
// import mapIcon from '../../assets/icons/Map.svg';
// import tvIcon from '../../assets/icons/tv.svg';
// import bathroomIcon from '../../assets/icons/droplet.svg';
// import radio from '../../assets/icons/ui-radios.svg';
// import people from '../../assets/icons/people.svg';
// import fuel from '../../assets/icons/fuel-pump.svg';

// const CamperCard = ({ camper }) => {
//     const [isFavorite, setIsFavorite] = useState(false);

//     useEffect(() => {
//         const savedFavorites = JSON.parse(localStorage.getItem('favoriteCampers')) || [];
//         if (savedFavorites.includes(camper.id)) {
//             setIsFavorite(true);
//         }
//     }, [camper.id]);

//     const handleFavoriteToggle = () => {
//         const savedFavorites = JSON.parse(localStorage.getItem('favoriteCampers')) || [];
//         let updatedFavorites;

//         if (isFavorite) {
//             updatedFavorites = savedFavorites.filter(favId => favId !== camper.id);
//         } else {
//             updatedFavorites = [...savedFavorites, camper.id];
//         }

//         localStorage.setItem('favoriteCampers', JSON.stringify(updatedFavorites));
//         setIsFavorite(!isFavorite);
//     };

//     const featuresList = [
//         { name: 'automatic', icon: automaticIcon, label: 'Automatic', value: camper.transmission === 'automatic' },
//         { name: 'kitchen', icon: kitchenIcon, label: 'Kitchen', value: camper.kitchen },
//         { name: 'AC', icon: acIcon, label: 'AC', value: camper.AC },
//         { name: 'TV', icon: tvIcon, label: 'TV', value: camper.TV },
//         { name: 'bathroom', icon: bathroomIcon, label: 'Bathroom', value: camper.bathroom },
//         { name: 'radio', icon: radio, label: 'Radio', value: camper.radio },
//         { name: 'people', icon: people, label: 'People', value: camper.people },
//         { name: 'fuel', icon: fuel, label: 'Fuel', value: camper.fuel },
//     ];

//     const locationParts = camper.location.split(', ').reverse().join(', ');

//     const truncatedDescription = camper.description.length > 62
//         ? camper.description.slice(0, 62) + '...'
//         : camper.description;
//     return (
//         <div className={styles.card}>
//             <div className={styles.imageWrapper}>
//                 <img src={camper.gallery[0].thumb} alt={camper.name} className={styles.camperImage} />
//             </div>
//             <div className={styles.details}>
//                 <div className={styles.titleSection}>
//                     <h3 className={styles.camperTitle}>{camper.name}</h3>
//                     <div className={styles.rightSection}>
//                         <span className={styles.price}>{`€${camper.price.toFixed(2)}`}</span>
//                         <button onClick={handleFavoriteToggle} className={styles.favoriteButton}>
//                             <img className={styles.heartIcon} src={isFavorite ? heartSelectedIcon : heartIcon} alt="Favorite" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className={styles.ratingLocation}>
//                     <div className={styles.rating}>
//                         <img src={starIcon} className={styles.starIcon} alt="Rating" />
//                         <span className={styles.ratingText}>{`${camper.rating} (${camper.reviews.length} Reviews)`}</span>
//                     </div>
//                     <div className={styles.locationSection}>
//                         <img src={mapIcon} alt="Map icon" className={styles.inputIcon} />
//                         <div className={styles.location}>{locationParts}</div>
//                     </div>
//                 </div>
//                 <p className={styles.description}>{truncatedDescription}</p>
//                 <div className={styles.features}>
//                     {featuresList.map(
//                         feature =>
//                             feature.value && (
//                                 <div key={feature.name} className={styles.feature}>
//                                     <img src={feature.icon} alt={feature.label} className={styles.featureIcon} />
//                                     <span>{feature.label}</span>
//                                 </div>
//                             )
//                     )}
//                 </div>
//                 <Button to={`/catalog/${camper.id}`} target="_blank">
//                     Show more
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default CamperCard;


