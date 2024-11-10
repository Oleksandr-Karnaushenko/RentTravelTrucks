import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { selectFilters } from '../../store/trucks/trucksSelectors.js';
import { addQueryFilters } from '../../store/trucks/actions.js';

import createQueryParams from '../../utils/createQueryParams.js';

import styles from './Button.module.css';

export default function Button({
  variant,
  id,
  children,
  loadMore,
  disabled = false,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleButtonClick = () => {
    if (variant === 'viewNow') navigate('/catalog');
    if (variant === 'showMore') navigate(`/catalog/${id}`);
    if (variant === 'loadMore') loadMore();
    if (variant === 'search') {
      const queryFilters = createQueryParams(filters);
      dispatch(addQueryFilters(queryFilters));
    }
  };
  return (
    <button
      className={clsx(styles.button, {
        [styles.view]: variant === 'viewNow',
        [styles.show]: variant === 'showMore',
        [styles.load]: variant === 'loadMore',
        [styles.search]: variant === 'search',
      })}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
