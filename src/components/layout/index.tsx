import { Outlet } from 'react-router';

import Links from 'components/links';

import styles from './styles.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Links />
      <Outlet />
    </div>
  );
};

export default Layout;
