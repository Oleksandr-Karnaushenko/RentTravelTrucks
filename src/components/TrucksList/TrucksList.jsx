import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TruckBasicInfo from '../TruckBasicInfo/TruckBasicInfo.jsx';

import { getCampers } from '../../store/trucks/trucksOperations.js';

import styles from './TrucksList.module.css';

const test = [1, 2, 3, 4];

export default function TrucksList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);
  return (
    <ul className={styles.list}>
      {test.map(truck => (
        <li key={truck} className={styles.item}>
          <TruckBasicInfo data={truck} />
        </li>
      ))}
    </ul>
  );
}
