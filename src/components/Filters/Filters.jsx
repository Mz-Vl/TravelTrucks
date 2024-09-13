// Filters.jsx
import { useState } from 'react';
import styles from './Filters.module.css';
import mapIcon from '../../assets/icons/map.svg';

const Filters = ({ onFilterChange }) => {
    const [location, setLocation] = useState('');
    const [form, setForm] = useState('');
    const [equipment, setEquipment] = useState([]);

    const handleEquipmentChange = (e) => {
        const value = e.target.value;
        setEquipment(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const applyFilters = () => {
        onFilterChange({ location, form, equipment });
    };

    return (
        <div className={styles.filters}>
            <label htmlFor="location" className={styles.inputLabel}>
                Location
                <div className={styles.inputWrapper}>
                    <img 
                        src={mapIcon} 
                        alt="Map icon" 
                        className={styles.inputIcon} 
                    />
                    <input 
                        type="text" 
                        placeholder="City" 
                        id="location"
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)}
                        className={styles.inputField}
                    />
                </div>
            </label>
            <h2 className={styles.filtersTitle}>Filters</h2>
            <h3 className={styles.filtersEquipmentTitle}>Vehicle equipment</h3>
            <div className={styles.equipmentGrid}>
    <label className={`${styles.equipmentItem} ${equipment.includes('AC') ? styles.active : ''}`}>
        <input
            type="checkbox"
            value="AC"
            checked={equipment.includes('AC')}
            onChange={handleEquipmentChange}
            className={styles.checkboxInput}
        />
        <svg className={styles.icon}>
        {/* Add SVG icon */}
        </svg>
        <span>AC</span>
    </label>

    <label className={`${styles.equipmentItem} ${equipment.includes('Kitchen') ? styles.active : ''}`}>
        <input
            type="checkbox"
            value="Kitchen"
            checked={equipment.includes('Kitchen')}
            onChange={handleEquipmentChange}
            className={styles.checkboxInput}
        />
        <svg className={styles.icon}>
        {/* Add SVG icon */}
        </svg>
        <span>Kitchen</span>
    </label>

    <label className={`${styles.equipmentItem} ${equipment.includes('TV') ? styles.active : ''}`}>
        <input
            type="checkbox"
            value="TV"
            checked={equipment.includes('TV')}
            onChange={handleEquipmentChange}
            className={styles.checkboxInput}
        />
        <svg className={styles.icon}>
        {/* Add SVG icon */}
        </svg>
        <span>TV</span>
    </label>

    {/* Add more equipment options  */}
    </div>

    <h3 className={styles.filtersEquipmentTitle}>Vehicle Type</h3>
    <div className={styles.vehicleTypeGrid}>
        <label className={`${styles.vehicleTypeItem} ${form === 'van' ? styles.active : ''}`}>
        <input
            type="radio"
            value="van"
            checked={form === 'van'}
            onChange={(e) => setForm(e.target.value)}
            className={styles.radioInput}
        />
        <svg className={styles.icon}>
        {/* Add SVG icon */}
        </svg>
        <span>Van</span>
    </label>

    <label className={`${styles.vehicleTypeItem} ${form === 'integrated' ? styles.active : ''}`}>
        <input
            type="radio"
            value="integrated"
            checked={form === 'integrated'}
            onChange={(e) => setForm(e.target.value)}
            className={styles.radioInput}
        />
        <svg className={styles.icon}>
        {/* Add SVG icon */}
        </svg>
        <span>Fully Integrated</span>
    </label>

    <label className={`${styles.vehicleTypeItem} ${form === 'alcove' ? styles.active : ''}`}>
        <input
            type="radio"
            value="alcove"
            checked={form === 'alcove'}
            onChange={(e) => setForm(e.target.value)}
            className={styles.radioInput}
        />
        <svg className={styles.icon}>
        {/* Add SVG icon */}
        </svg>
        <span>Alcove</span>
    </label>
    </div>
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filters;