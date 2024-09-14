// VehicleTypeFilter.jsx
import FilterSection from '../FilterSection/FilterSection';
import vanIcon from '../../assets/icons/bi_grid-1x2.svg';
import fullyIntegratedIcon from '../../assets/icons/bi_grid.svg';
import alcoveIcon from '../../assets/icons/bi_grid_3x3.svg';

const vehicleTypes = [
    { value: 'panelTruck', icon: vanIcon, label: 'Van' },
    { value: 'integrated', icon: fullyIntegratedIcon, label: 'Fully Integrated' },
    { value: 'alcove', icon: alcoveIcon, label: 'Alcove' },
];

const VehicleTypeFilter = ({ selectedType, onTypeChange }) => (
    <FilterSection 
        title="Vehicle type"
        options={vehicleTypes}
        selectedOptions={[selectedType]}
        onOptionChange={onTypeChange}
    />
);

export default VehicleTypeFilter;