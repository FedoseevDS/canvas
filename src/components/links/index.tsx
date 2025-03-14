import { Link } from 'react-router';

import styles from './styles.module.css';

const Links = () => {
  return (
    <div className={styles.container}>
      <Link to={'example-1'}>Прямоугольник, треугольник, черточка, картинка</Link>
      <Link to={'example-2'}>Кисточка</Link>
      <Link to={'example-3'}>Круги, дуги, окружности</Link>
    </div>
  );
};

export default Links;
