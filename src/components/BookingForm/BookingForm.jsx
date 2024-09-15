import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { X } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Wrong email').required('Email required'),
    date: Yup.date().min(new Date(), 'Date cannot be in the past').required('Date required'),
    comment: Yup.string(),
});

const Alert = ({ children, onClose }) => (
    <div className={styles.alert}>
        {children}
        <X className={styles.closeIcon} onClick={onClose} />
    </div>
);

const BookingForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setShowNotification(true);
            setSubmitting(false);
            resetForm();
            setSelectedDate(null);
            setTimeout(() => setShowNotification(false), 5000);
        }, 400);
    };

    return (
        <div className={styles.bookingForm}>
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            {showNotification && (
                <Alert onClose={() => setShowNotification(false)}>
                    Booking successful! We will contact you soon.
                </Alert>
            )}
            <Formik
                initialValues={{ name: '', email: '', date: null, comment: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <Field type="text" name="name" placeholder="Name*" className={styles.formField} />
                        <ErrorMessage name="name" component="div" className={styles.errorMessage} />

                        <Field type="email" name="email" placeholder="Email*" className={styles.formField} />
                        <ErrorMessage name="email" component="div" className={styles.errorMessage} />

                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => {
                                setSelectedDate(date);
                                setFieldValue('date', date);
                            }}
                            dateFormat="d MMMM, yyyy"
                            className={`${styles.datePicker} ${styles.formField}`}
                            calendarClassName={styles.customCalendar}
                            placeholderText="Booking date*"
                            minDate={new Date()}
                        />
                        <ErrorMessage name="date" component="div" className={styles.errorMessage} />

                        <Field
                            as="textarea"
                            name="comment"
                            placeholder="Comment"
                            className={`${styles.formField} ${styles.comment}`}
                        />

                        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BookingForm;