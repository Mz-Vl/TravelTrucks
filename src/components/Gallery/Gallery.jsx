// Gallery.jsx
import styles from './Gallery.module.css';

const Gallery = ({ images }) => {
    return (
        <div className={styles.gallery}>
        {images.map((image, index) => (
            <img key={index} src={image.original} alt={`Gallery image ${index + 1}`} className={styles.galleryImage}/>
        ))}
        </div>
    );
};

export default Gallery;