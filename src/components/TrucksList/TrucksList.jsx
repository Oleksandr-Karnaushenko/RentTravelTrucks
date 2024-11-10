import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TruckBasicInfo from '../TruckBasicInfo/TruckBasicInfo.jsx';
import Button from '../Button/Button.jsx';

import { getCampers } from '../../store/trucks/trucksOperations.js';
import {
  selectItems,
  selectPagination,
  selectTotal,
} from '../../store/trucks/trucksSelectors.js';
import { setPage } from '../../store/trucks/actions.js';

import styles from './TrucksList.module.css';
export default function TrucksList() {
  const dispatch = useDispatch();

  const totalItems = useSelector(selectTotal);
  const pagination = useSelector(selectPagination);
  const { page, limit } = pagination;

  const items = useSelector(selectItems);

  const totalPages = Math.ceil(totalItems / limit);

  const handleClickLoad = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    dispatch(getCampers());
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
      {totalPages > 1 && (
        <Button
          variant="loadMore"
          loadMore={handleClickLoad}
          disabled={page === totalPages}
        >
          Load more
        </Button>
      )}
    </div>
  );
}
