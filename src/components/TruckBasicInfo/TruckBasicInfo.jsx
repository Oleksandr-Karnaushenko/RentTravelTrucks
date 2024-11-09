import Button from '../Button/Button.jsx';
import TruckOptions from '../TruckOptions/TruckOptions.jsx';

import styles from './TruckBasicInfo.module.css';

export default function TruckBasicInfo({ data }) {
  const keysOptions = [
    'AC',
    'TV',
    'bathroom',
    'gas',
    'kitchen',
    'microwave',
    'radio',
    'refrigerator',
    'water',
  ];

  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={data.gallery[0].original}
        alt="Camper image"
      />
      <section className={styles.content}>
        <section>
          <div className={styles.name_price}>
            <h2>{data.name}</h2>
            <div>
              <h2>&euro;{data.price}.00</h2>
              <div></div>
            </div>
          </div>
          <ul className={styles.rating_location}>
            <li>
              <div></div>
              <p>
                {data.rating}({data.reviews.length} Reviews)
              </p>
            </li>
            <li>
              <div></div>
              <p>{data.location}</p>
            </li>
          </ul>
        </section>
        <p className={styles.description}>{data.description}</p>
        <ul className={styles.optionsList}>
          <li>
            <TruckOptions option={data.transmission} />
          </li>
          <li>
            <TruckOptions option={data.engine} />
          </li>
          {keysOptions.map(key => {
            if (data[key] === true) {
              return (
                <li key={key}>
                  <TruckOptions option={key} />
                </li>
              );
            }
            return null;
          })}
        </ul>
        <Button variant="showMore" id={data.id}>
          Show more
        </Button>
      </section>
    </div>
  );
}
