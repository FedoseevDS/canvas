import { Link } from 'react-router';

import { configLinks } from './const';

import styles from './styles.module.css';

const Links = () => {
  return (
    <div className={styles.container}>
      {configLinks.map(({ description, path }) => (
        <Link
          key={path}
          to={path}
        >
          {description}
        </Link>
      ))}
    </div>
  );
};

export default Links;
