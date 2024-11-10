import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TruckBasicInfo from '../TruckBasicInfo/TruckBasicInfo.jsx';
import Button from '../Button/Button.jsx';

import { getCampers } from '../../store/trucks/trucksOperations.js';
import {
  selectItems,
  selectTotal,
} from '../../store/trucks/trucksSelectors.js';

import styles from './TrucksList.module.css';

export default function TrucksList() {
  const dispatch = useDispatch();

  const totalItems = useSelector(selectTotal);
  const items = useSelector(selectItems);

  const [page, setPage] = useState(1);
  const limit = 4;
  const totalPages = Math.ceil(totalItems / limit);

  const handleClickLoad = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getCampers({ page, limit }));
  }, [dispatch, page]);

  return (
    <div>
      <ul className={styles.list}>
        {items.map(truck => (
          <li key={truck.id} className={styles.item}>
            <TruckBasicInfo data={truck} />
          </li>
        ))}
      </ul>
      <Button
        variant="loadMore"
        loadMore={handleClickLoad}
        disabled={page === totalPages}
      >
        Load more
      </Button>
    </div>
  );
}
