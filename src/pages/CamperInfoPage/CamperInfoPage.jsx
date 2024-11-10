import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Icon from '../../components/Icon/Icon.jsx';

import {
  selectIsRefreshing,
  selectTruckInfo,
} from '../../store/trucks/trucksSelectors.js';
import { getCamperInfo } from '../../store/trucks/trucksOperations.js';

import styles from './CamperInfoPage.module.css';

function CamperInfoPage() {
  const dispatch = useDispatch();
  const truckInfo = useSelector(selectTruckInfo);
  const loader = useSelector(selectIsRefreshing);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperInfo(id));
  }, [dispatch, id]);

  return (
    <>
      {loader ? (
        <p>Loading,....</p>
      ) : (
        <div className={styles.container}>
          <section className={styles.description}>
            <section className={styles.mainInfo}>
              <h2>{truckInfo.name}</h2>
              <div className={styles.ratingDescr}>
                <ul className={styles.rating_location}>
                  <li>
                    <Icon
                      id="star"
                      width={16}
                      height={14}
                      color="rating"
                    ></Icon>
                    <p>
                      {truckInfo.rating}({truckInfo.reviews.length} Reviews)
                    </p>
                  </li>
                  <li>
                    <Icon id="map" width={16} height={14}></Icon>
                    <p>{truckInfo.location}</p>
                  </li>
                </ul>
                <div className={styles.price}>
                  <h2>&euro;{truckInfo.price}.00</h2>
                </div>
              </div>
            </section>
            <ul className={styles.imgGallery}>
              {truckInfo.gallery.map(img => (
                <li key={img} className={styles.imgItem}>
                  <img
                    src={img.original}
                    alt="Truck photo"
                    className={styles.img}
                  />
                </li>
              ))}
            </ul>
            <p>{truckInfo.description}</p>
          </section>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default CamperInfoPage;
