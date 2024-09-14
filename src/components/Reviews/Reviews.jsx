import styles from './Reviews.module.css';
import star from '../../assets/icons/star.svg'
import emptyStar from '../../assets/icons/emptyStar.svg';

const Reviews = ({ reviews }) => {
    const renderStars = (rating) => {
        const maxRating = 5;
        return (
        <div className={styles.stars}>
        {[...Array(maxRating)].map((_, i) => (
            <img
                key={i}
                src={i < rating ? star : emptyStar}
                alt={i < rating ? "Filled star" : "Empty star"}
                className={styles.starIcon}
            />
        ))}
        </div>
        );
    };

    const getInitial = (name) => name.charAt(0).toUpperCase();

    return (
        <div className={styles.reviews}>
            {reviews.map((review, index) => (
            <div key={index} className={styles.review}>
                <div className={styles.reviewHeader}>
                    <div className={styles.reviewerInitial}>
                        {getInitial(review.reviewer_name)}
                    </div>
                    <div className={styles.reviewerInfo}>
                        <p className={styles.reviewerName}>{review.reviewer_name}</p>
                            {renderStars(review.reviewer_rating)}
                    </div>
                </div>
            <p className={styles.comment}>{review.comment}</p>
        </div>
        ))}
    </div>
    );
};

export default Reviews;