import mapIcon from '../../assets/icons/Map.svg';
import styles from './LocationInput.module.css';

const LocationInput = ({ value, onChange }) => (
    <label htmlFor="location" className={styles.inputLabel}>
        Location
        <div className={styles.inputWrapper}>
            <img src={mapIcon} alt="Map icon" className={styles.inputIcon} />
            <input 
                type="text" 
                placeholder="City" 
                id="location"
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                className={styles.inputField}
            />
        </div>
    </label>
);

export default LocationInput;