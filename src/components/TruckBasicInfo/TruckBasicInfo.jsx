import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
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
            <div className={styles.price}>
              <h2>&euro;{data.price}.00</h2>
              <Icon id="like" width={26} height={24}></Icon>
            </div>
          </div>
          <ul className={styles.rating_location}>
            <li>
              <Icon id="star" width={16} height={14} color="rating"></Icon>
              <p>
                {data.rating}({data.reviews.length} Reviews)
              </p>
            </li>
            <li>
              <Icon id="map" width={16} height={14}></Icon>
              <p>{data.location}</p>
            </li>
          </ul>
        </section>
        <p className={styles.description}>{data.description}</p>
        <ul className={styles.optionsList}>
          <li>
            <TruckOptions option={data.transmission} id="transmission" />
          </li>
          <li>
            <TruckOptions option={data.engine} id="engine" />
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
