import Button from '../../components/Button/Button.jsx';
import Location from '../../components/Location/Location.jsx';
import VehicleEquipment from '../../components/VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../../components/VehicleType/VehicleType.jsx';

import styles from './CatalogPage.module.css';
import TrucksList from '../../components/TrucksList/TrucksList.jsx';

function CatalogPage() {
  return (
    <div className={styles.container}>
      <section className={styles.filters}>
        <Location />
        <VehicleEquipment />
        <VehicleType />
        <Button variant="search">Search</Button>
      </section>
      <section className={styles.trucks}>
        <TrucksList />
      </section>
    </div>
  );
}

export default CatalogPage;
