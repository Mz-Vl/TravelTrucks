import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ to, children, className, ...props }) => {
    return (
        <Link to={to} className={`${styles.button} ${className}`} {...props}>
            {children}
        </Link>
    );
};

export default Button;