// FilterSection.jsx
import styles from './FilterSection.module.css';

const FilterSection = ({ title, options, selectedOptions, onOptionChange }) => (
    <>
        <h3 className={styles.filtersSubtitle}>{title}</h3>
        <hr className={styles.divider} />
        <div className={styles.optionsGrid}>
            {options.map(option => (
                <div 
                    key={option.value}
                    className={`${styles.optionItem} ${selectedOptions.includes(option.value) ? styles.active : ''}`}
                    onClick={() => onOptionChange(option.value)}
                >
                    <div className={styles.iconWrapper}>
                        <img src={option.icon} alt={option.label} />
                        <span>{option.label}</span>
                    </div>
                </div>
            ))}
        </div>
    </>
);

export default FilterSection;