import { useParams } from 'react-router-dom';
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
    const { id } = useParams();

    return (
        <div className={styles.camperDetailsPage}>
            <h1>Camper Details</h1>
            <p>Camper ID: {id}</p>
            {/* camper details */}
        </div>
    );
};

export default CamperDetailsPage;