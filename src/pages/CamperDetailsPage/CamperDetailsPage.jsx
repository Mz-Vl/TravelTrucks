// CamperDetailsPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchCamperDetails } from '../../redux/campersSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CamperDetailsPage.module.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string(),
});

const CamperDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentCamper, status, error } = useSelector(state => state.campers);
    const [selectedDate, setSelectedDate] = useState(new Date());
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

    const renderStars = (rating) => {
        const maxRating = 5;
        return (
            <div className={styles.stars}>
                {[...Array(maxRating)].map((_, i) => (
                    <span key={i} className={i < rating ? styles.filledStar : styles.emptyStar}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.camperDetailsPage}>
            <div className={styles.camperInfo}>
                <h1>{currentCamper.name}</h1>
                <div className={styles.info}>
                    <div>
                        {renderStars(currentCamper.rating)}
                        <p>({currentCamper.reviews.length} Reviews)</p>
                    </div>
                    <p>Location: {currentCamper.location}</p>
                    <p>Price: €{currentCamper.price.toFixed(2)}</p>
                </div>
                <div className={styles.gallery}>
                    {currentCamper.gallery.map((image, index) => (
                        <img key={index} src={image.original} alt={`${currentCamper.name} - ${index + 1}`} />
                    ))}
                </div>
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
                <div className={styles.tabContent}>
                    {activeTab === 'features' ? (
                        <div className={styles.features}>
                            <ul>
                                {currentCamper.transmission && <li>{currentCamper.transmission}</li>}
                                {currentCamper.engine && <li>{currentCamper.engine}</li>}
                                {currentCamper.AC && <li>AC</li>}
                                {currentCamper.bathroom && <li>Bathroom</li>}
                                {currentCamper.kitchen && <li>Kitchen</li>}
                                {currentCamper.TV && <li>TV</li>}
                                {currentCamper.radio && <li>Radio</li>}
                                {currentCamper.refrigerator && <li>Refrigerator</li>}
                                {currentCamper.microwave && <li>Microwave</li>}
                                {currentCamper.gas && <li>Gas</li>}
                                {currentCamper.water && <li>Water</li>}
                            </ul>
                            <h3>Vehicle details</h3>
                            <div className={styles.info}>
                                <p>Form {currentCamper.form}</p>
                                <p>Length {currentCamper.length.slice(0, -1)} m</p>
                                <p>Width {currentCamper.width.slice(0, -1)} m</p>
                                <p>Height {currentCamper.height.slice(0, -1)} m</p>
                                <p>Tank {currentCamper.tank.slice(0, -1)} l</p>
                                <p>Consumption {currentCamper.consumption.slice(0, -2)} km</p>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.reviews}>
                            {currentCamper.reviews.map((review, index) => (
                                <div key={index} className={styles.review}>
                                    <p>Reviewer: {review.reviewer_name}</p>
                                    <div>{renderStars(review.reviewer_rating)}</div>
                                    <p>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.bookingForm}>
                <h2>Book your campervan now</h2>
                <p>Stay connected! We are always ready to help you.</p>
                <Formik
                    initialValues={{ name: '', email: '', date: '', comment: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form>
                            <div className={styles.formField}>
                                <Field type="text" name="name" placeholder="Name*" />
                                <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                            </div>
                            <div className={styles.formField}>
                                <Field type="email" name="email" placeholder="Email*" />
                                <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                            </div>
                            <div className={styles.formField}>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => {
                                        setSelectedDate(date);
                                        setFieldValue('date', date);
                                    }}
                                    dateFormat="MMMM d, yyyy"
                                    className={styles.datePicker}
                                    placeholderText="Booking date*"
                                />
                                <ErrorMessage name="date" component="div" className={styles.errorMessage} />
                            </div>
                            <div className={styles.formField}>
                                <Field as="textarea" name="comment" placeholder="Comment" />
                                <ErrorMessage name="comment" component="div" className={styles.errorMessage} />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                                Send
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default CamperDetailsPage;

