import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Button.module.css';

export default function Button({ variant, id, children }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (variant === 'viewNow') navigate('/catalog');
    if (variant === 'showMore') navigate(`/catalog/${id}`);
  };
  return (
    <button
      className={clsx(styles.button, {
        [styles.view]: variant === 'viewNow',
        [styles.show]: variant === 'showMore',
      })}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
}
