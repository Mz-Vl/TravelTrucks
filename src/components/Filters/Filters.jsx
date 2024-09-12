// Filters.jsx
import { useState } from 'react';
import styles from './Filters.module.css';

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
            <input 
                type="text" 
                placeholder="Location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
            />
            <select value={form} onChange={(e) => setForm(e.target.value)}>
                <option value="">All Types</option>
                <option value="van">Van</option>
                <option value="alcove">Alcove</option>
                <option value="integrated">Integrated</option>
            </select>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        value="AC" 
                        checked={equipment.includes('AC')} 
                        onChange={handleEquipmentChange}
                    /> AC
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        value="kitchen" 
                        checked={equipment.includes('kitchen')} 
                        onChange={handleEquipmentChange}
                    /> Kitchen
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        value="TV" 
                        checked={equipment.includes('TV')} 
                        onChange={handleEquipmentChange}
                    /> TV
                </label>
                {/* Add more equipment options */}
            </div>
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filters;