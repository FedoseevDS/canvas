import { Link } from 'react-router';

import styles from './styles.module.css';

const Links = () => {
  return (
    <div className={styles.container}>
      <Link to={'example-1'}>Example-1</Link>
    </div>
  );
};

export default Links;
