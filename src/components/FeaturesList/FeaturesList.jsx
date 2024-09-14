// FeaturesList.jsx
import automaticIcon from '../../assets/icons/gearBox.svg';
import kitchenIcon from '../../assets/icons/kitchen.svg';
import acIcon from '../../assets/icons/ac.svg';
import tvIcon from '../../assets/icons/tv.svg';
import bathroomIcon from '../../assets/icons/droplet.svg';
import radio from '../../assets/icons/ui-radios.svg';
import people from '../../assets/icons/people.svg';
import fuel from '../../assets/icons/fuel-pump.svg';
import styles from './FeaturesList.module.css';

const featuresList = [
    { name: 'automatic', icon: automaticIcon, label: 'Automatic', key: 'transmission' },
    { name: 'kitchen', icon: kitchenIcon, label: 'Kitchen', key: 'kitchen' },
    { name: 'AC', icon: acIcon, label: 'AC', key: 'AC' },
    { name: 'TV', icon: tvIcon, label: 'TV', key: 'TV' },
    { name: 'bathroom', icon: bathroomIcon, label: 'Bathroom', key: 'bathroom' },
    { name: 'radio', icon: radio, label: 'Radio', key: 'radio' },
    { name: 'people', icon: people, label: 'People', key: 'people' },
    { name: 'fuel', icon: fuel, label: 'Fuel', key: 'fuel' },
];

const FeaturesList = ({ camper }) => (
    <div className={styles.features}>
        {featuresList.map(feature => 
            (feature.key === 'transmission' ? camper[feature.key] === 'automatic' : camper[feature.key]) && (
                <div key={feature.name} className={styles.feature}>
                    <img src={feature.icon} alt={feature.label} className={styles.featureIcon} />
                    <span>{feature.label}</span>
                </div>
            )
        )}
    </div>
);

export default FeaturesList;