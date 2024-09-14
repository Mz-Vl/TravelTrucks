// CamperDetailsPage.jsx
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

            <div className={styles.contentWrapper}>
                <div className={styles.leftContent}>
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

                    <hr className={styles.divider}/>

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































































// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { fetchCamperDetails } from '../../redux/campersSlice';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Gallery from '../../components/Gallery/Gallery';
// import RatingLocation from '../../components/RatingLocation/RatingLocation';
// import Features from '../../components/Features/Features';
// import Reviews from '../../components/Reviews/Reviews';
// import styles from './CamperDetailsPage.module.css';

// const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     date: Yup.date().required('Date is required'),
//     comment: Yup.string(),
// });

// const CamperDetailsPage = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { currentCamper, status, error } = useSelector(state => state.campers);
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [activeTab, setActiveTab] = useState('features');

//     useEffect(() => {
//         dispatch(fetchCamperDetails(id));
//     }, [dispatch, id]);

//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     }

//     if (status === 'failed') {
//         return <div>Error: {error}</div>;
//     }

//     if (!currentCamper) {
//         return <div>No camper found</div>;
//     }

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className={`${styles.camperDetailsPage} ${styles.container}`}>
//             <h1 className={styles.camperDetailsTitle}>{currentCamper.name}</h1>
//             <RatingLocation
//                 rating={currentCamper.rating}
//                 reviewCount={currentCamper.reviews.length}
//                 location={currentCamper.location}
//             />
//             <div className={styles.camperPrice}>
//                 <span className={styles.price}>{`€${currentCamper.price.toFixed(2)}`}</span>
//             </div>
//             <Gallery images={currentCamper.gallery} className={styles.detailsPageGallery} />
//             <p className={styles.description}>{currentCamper.description}</p>

//             <div className={styles.tabButtons}>
//                     <button
//                         className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
//                         onClick={() => handleTabClick('features')}
//                     >
//                         Features
//                     </button>
//                     <button
//                         className={`${styles.tabButton} ${activeTab === 'reviews' ? styles.active : ''}`}
//                         onClick={() => handleTabClick('reviews')}
//                     >
//                         Reviews
//                 </button>
//             </div>

//             <hr className={styles.divider}/>

//                 {/* Tab Content */}
//                 {activeTab === 'features' && <Features camper={currentCamper} />}
//                 {activeTab === 'reviews' && <Reviews reviews={currentCamper.reviews} />}

            






            
//             <div className={styles.bookingForm}>
//                 <h2>Book your campervan now</h2>
//                 <p>Stay connected! We are always ready to help you.</p>
//                 <Formik
//                     initialValues={{ name: '', email: '', date: '', comment: '' }}
//                     validationSchema={validationSchema}
//                     onSubmit={(values, { setSubmitting }) => {
//                         setTimeout(() => {
//                             alert(JSON.stringify(values, null, 2));
//                             setSubmitting(false);
//                         }, 400);
//                     }}
//                 >
//                     {({ isSubmitting, setFieldValue }) => (
//                         <Form>
//                             <div className={styles.formField}>
//                                 <Field type="text" name="name" placeholder="Name*" />
//                                 <ErrorMessage name="name" component="div" className={styles.errorMessage} />
//                             </div>
//                             <div className={styles.formField}>
//                                 <Field type="email" name="email" placeholder="Email*" />
//                                 <ErrorMessage name="email" component="div" className={styles.errorMessage} />
//                             </div>
//                             <div className={styles.formField}>
//                                 <DatePicker
//                                     selected={selectedDate}
//                                     onChange={(date) => {
//                                         setSelectedDate(date);
//                                         setFieldValue('date', date);
//                                     }}
//                                     dateFormat="MMMM d, yyyy"
//                                     className={styles.datePicker}
//                                     placeholderText="Booking date*"
//                                 />
//                                 <ErrorMessage name="date" component="div" className={styles.errorMessage} />
//                             </div>
//                             <div className={styles.formField}>
//                                 <Field as="textarea" name="comment" placeholder="Comment" />
//                                 <ErrorMessage name="comment" component="div" className={styles.errorMessage} />
//                             </div>
//                             <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
//                                 Send
//                             </button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//     );
// };

// export default CamperDetailsPage;








