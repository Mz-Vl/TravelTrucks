// CamperImage.jsx
import styles from './CamperImage.module.css';

const CamperImage = ({ imageUrl, name }) => (
    <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.camperImage} />
    </div>
);

export default CamperImage;