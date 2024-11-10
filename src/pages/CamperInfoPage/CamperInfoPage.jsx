import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import FeedbackForm from '../../components/FeedbackForm/FeedbackForm.jsx';
import DetailInfo from '../../components/DetailInfo/DetailInfo.jsx';
import MainTruckInfo from '../../components/MainTruckInfo/MainTruckInfo.jsx';

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
        Object.keys(truckInfo).length !== 0 && (
          <div className={styles.container}>
            <MainTruckInfo truckInfo={truckInfo} />
            <div className={styles.navigation}>
              <h3>Features</h3>
              <h3>Reviews</h3>
            </div>
            <div className={styles.detail_info_form}>
              <DetailInfo truckInfo={truckInfo} />
              <FeedbackForm />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default CamperInfoPage;
