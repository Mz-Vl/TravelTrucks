import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperDetails } from '../../redux/campersSlice';
import Gallery from '../../components/Gallery/Gallery';
import RatingLocation from '../../components/RatingLocation/RatingLocation';
import Features from '../../components/Features/Features';
import Reviews from '../../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentCamper, status, error } = useSelector(state => state.campers);
    const [activeTab, setActiveTab] = useState('features');

    useEffect(() => {
        dispatch(fetchCamperDetails(id));
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    if (!currentCamper) {
        return <div>No camper found</div>;
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={`${styles.camperDetailsPage} ${styles.container}`}>
            <h1 className={styles.camperDetailsTitle}>{currentCamper.name}</h1>
            <RatingLocation
                rating={currentCamper.rating}
                reviewCount={currentCamper.reviews.length}
                location={currentCamper.location}
            />
            <div className={styles.camperPrice}>
                <span className={styles.price}>{`€${currentCamper.price.toFixed(2)}`}</span>
            </div>
            <Gallery images={currentCamper.gallery} className={styles.detailsPageGallery} />
            <p className={styles.description}>{currentCamper.description}</p>
            <div className={styles.tabButtons}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
                    onClick={() => handleTabClick('features')}
                >
                    Features 
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'reviews' ? styles.active : ''}`}
                    onClick={() => handleTabClick('reviews')}
                >
                    Reviews 
                </button>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.leftContent}>
                    {activeTab === 'features' && <Features camper={currentCamper} />}
                    {activeTab === 'reviews' && <Reviews reviews={currentCamper.reviews} />}
                </div>
                <div className={styles.rightContent}>
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default CamperDetailsPage;