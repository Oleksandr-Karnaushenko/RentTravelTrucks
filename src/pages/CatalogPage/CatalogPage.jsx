import Button from '../../components/Button/Button.jsx';
import Location from '../../components/Location/Location.jsx';
import TruckBasicInfo from '../../components/TruckBasicInfo/TruckBasicInfo.jsx';
import VehicleEquipment from '../../components/VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../../components/VehicleType/VehicleType.jsx';

import styles from './CatalogPage.module.css';

const test = [1, 2, 3, 4];

function CatalogPage() {
  return (
    <div className={styles.container}>
      <section className={styles.filters}>
        <Location />
        <p>Filters</p>
        <VehicleEquipment />
        <VehicleType />
        <Button variant="">Search</Button>
      </section>
      <section className={styles.trucks}>
        <ul className={styles.list}>
          {test.map(truck => (
            <li key={truck} className={styles.item}>
              <TruckBasicInfo data={truck} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CatalogPage;
