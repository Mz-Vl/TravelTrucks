import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Wrong email').required('Email required'),
    date: Yup.date().required('Date required'),
    comment: Yup.string(),
});

const BookingForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
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
                                dateFormat="d MMMM, yyyy"
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
    );
};

export default BookingForm;