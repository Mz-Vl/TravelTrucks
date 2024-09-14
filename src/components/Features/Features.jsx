import FeaturesList from '../FeaturesList/FeaturesList';
import styles from './Features.module.css';

const Features = ({ camper }) => {
    const vehicleDetails = [
    { label: 'Form', value: camper.form },
    { label: 'Length', value: `${parseFloat(camper.length).toFixed(1)} m` },
    { label: 'Width', value: `${parseFloat(camper.width).toFixed(1)} m` },
    { label: 'Height', value: `${parseFloat(camper.height).toFixed(1)} m` },
    { label: 'Tank', value: `${parseInt(camper.tank)} l` },
    { label: 'Consumption', value: `${parseFloat(camper.consumption).toFixed(1)} l/100km` },
    ];
    return (
        <div className={styles.featuresContainer}>
            {/* <div className={styles.vehicleDetails}> */}
                
        
                <div className={styles.vehicleDetails}>
                    <FeaturesList camper={camper} />
                    <h3 >Vehicle details</h3>
                    <hr className={styles.divider}/>
                    <div className={styles.info}>
                        {vehicleDetails.map(({ label, value }) => (
                        <div key={label} className={styles.detailRow}>
                            <span className={styles.detailLabel}>{label}:</span>
                            <span className={styles.detailValue}>{value}</span>
                        </div>
                        ))}
                </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Features;
