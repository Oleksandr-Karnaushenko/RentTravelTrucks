import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Button.module.css';

export default function Button({ variant, children }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (variant === 'viewNow') navigate('/catalog');
  };
  return (
    <button
      className={clsx(styles.button, {
        [styles.view]: variant === 'viewNow',
      })}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
}
