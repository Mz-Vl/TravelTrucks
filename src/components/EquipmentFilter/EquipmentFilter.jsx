// EquipmentFilter.jsx
import FilterSection from '../FilterSection/FilterSection';
import acIcon from '../../assets/icons/ac.svg';
import automaticIcon from '../../assets/icons/gearBox.svg';
import kitchenIcon from '../../assets/icons/kitchen.svg';
import tvIcon from '../../assets/icons/tv.svg';
import bathroomIcon from '../../assets/icons/droplet.svg';

const equipmentOptions = [
    { value: 'AC', icon: acIcon, label: 'AC' },
    { value: 'automatic', icon: automaticIcon, label: 'Manual' },
    { value: 'kitchen', icon: kitchenIcon, label: 'Kitchen' },
    { value: 'TV', icon: tvIcon, label: 'TV' },
    { value: 'bathroom', icon: bathroomIcon, label: 'Bathroom' },
];

const EquipmentFilter = ({ selectedEquipment, onEquipmentChange }) => (
    <FilterSection 
        title="Vehicle equipment"
        options={equipmentOptions}
        selectedOptions={selectedEquipment}
        onOptionChange={(value) => {
            onEquipmentChange(prev => 
                prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
            );
        }}
    />
);

export default EquipmentFilter;