import styles from './Header.module.scss';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function Header() {
    return (<div className={styles.header}>
        <ToastContainer autoClose={1000} />
        <h2>User Manager</h2>
    </div>);
}

export default Header;