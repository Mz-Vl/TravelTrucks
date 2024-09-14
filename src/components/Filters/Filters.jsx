// Filters.jsx
import { useState } from 'react';
import Button from '../Button/Button';
import LocationInput from '../LocationInput/LocationInput';
import EquipmentFilter from '../EquipmentFilter/EquipmentFilter';
import VehicleTypeFilter from '../VehicleTypeFilter/VehicleTypeFilter';
import styles from './Filters.module.css';

const Filters = ({ onFilterChange }) => {
    const [location, setLocation] = useState('');
    const [form, setForm] = useState('');
    const [equipment, setEquipment] = useState([]);

    const applyFilters = () => {
        onFilterChange({ location, form, equipment });
    };

    return (
        <>
            <div className={styles.filters}>
                <LocationInput value={location} onChange={setLocation} />

                <h2 className={styles.filtersTitle}>Filters</h2>

                <EquipmentFilter 
                    selectedEquipment={equipment} 
                    onEquipmentChange={setEquipment} 
                />

                <VehicleTypeFilter 
                    selectedType={form} 
                    onTypeChange={setForm} 
                />
            </div>
            <Button onClick={applyFilters} className={styles.applyButton}>Apply Filters</Button>
        </>
    );
};

export default Filters;


















































// import { useState } from 'react';
// import Button from '../Button/Button';
// import styles from './Filters.module.css';
// import mapIcon from '../../assets/icons/Map.svg';
// import acIcon from '../../assets/icons/ac.svg';
// import automaticIcon from '../../assets/icons/gearBox.svg';
// import kitchenIcon from '../../assets/icons/kitchen.svg';
// import tvIcon from '../../assets/icons/tv.svg';
// import bathroomIcon from '../../assets/icons/droplet.svg';
// import vanIcon from '../../assets/icons/bi_grid-1x2.svg';
// import fullyIntegratedIcon from '../../assets/icons/bi_grid.svg';
// import alcoveIcon from '../../assets/icons/bi_grid_3x3.svg';

// const Filters = ({ onFilterChange }) => {
//     const [location, setLocation] = useState('');
//     const [form, setForm] = useState('');
//     const [equipment, setEquipment] = useState([]);

//     const handleEquipmentChange = (value) => {
//         setEquipment(prev => 
//             prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
//         );
//     };

//     const handleVehicleTypeChange = (value) => {
//         setForm(value);
//     };

//     const applyFilters = () => {
//         onFilterChange({ location, form, equipment });
//     };

//     const equipmentOptions = [
//         { value: 'AC', icon: acIcon, label: 'AC' },
//         { value: 'automatic', icon: automaticIcon, label: 'Automatic' },
//         { value: 'kitchen', icon: kitchenIcon, label: 'Kitchen' },
//         { value: 'TV', icon: tvIcon, label: 'TV' },
//         { value: 'bathroom', icon: bathroomIcon, label: 'Bathroom' },
//     ];

//     const vehicleTypes = [
//         { value: 'panelTruck', icon: vanIcon, label: 'Van' },
//         { value: 'integrated', icon: fullyIntegratedIcon, label: 'Fully Integrated' },
//         { value: 'alcove', icon: alcoveIcon, label: 'Alcove' },
//     ];

//     return (
//         <div className={styles.filters}>
//             <label htmlFor="location" className={styles.inputLabel}>
//                 Location
//                 <div className={styles.inputWrapper}>
//                     <img src={mapIcon} alt="Map icon" className={styles.inputIcon} />
//                     <input 
//                         type="text" 
//                         placeholder="City" 
//                         id="location"
//                         value={location} 
//                         onChange={(e) => setLocation(e.target.value)}
//                         className={styles.inputField}
//                     />
//                 </div>
//             </label>
            
//             <h2 className={styles.filtersTitle}>Filters</h2>
            
//             <h3 className={styles.filtersSubtitle}>Vehicle equipment</h3>
//             <hr className={styles.divider} />
//             <div className={styles.optionsGrid}>
//                 {equipmentOptions.map(option => (
//                     <div 
//                         key={option.value}
//                         className={`${styles.optionItem} ${equipment.includes(option.value) ? styles.active : ''}`}
//                         onClick={() => handleEquipmentChange(option.value)}
//                     >
//                         <div className={styles.iconWrapper}>
//                             <img src={option.icon} alt={option.label} />
//                             <span>{option.label}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <h3 className={styles.filtersSubtitle}>Vehicle type</h3>
//             <hr className={styles.divider} />
//             <div className={styles.optionsGrid}>
//                 {vehicleTypes.map(type => (
//                     <div 
//                         key={type.value}
//                         className={`${styles.optionItem} ${form === type.value ? styles.active : ''}`}
//                         onClick={() => handleVehicleTypeChange(type.value)}
//                     >
//                         <div className={`${styles.iconWrapper} ${styles.filterButton}`}>
//                             {type.icon && <img src={type.icon} alt={type.label} />}
//                             <span>{type.label}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <Button onClick={applyFilters} >Apply Filters</Button>
//         </div>
//     );
// };

// export default Filters;