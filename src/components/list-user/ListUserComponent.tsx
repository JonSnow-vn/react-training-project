import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import Button from '../../common-components/Button/Button';

import styles from './ListUser.module.scss';


function ListUserComponent() {
    const listUser = useSelector((state: RootState) => state.managerUser)
    return (
        <>
            <div className={styles.btn}>
                <Button type='link' label='Add' action={'/user-form'} margin='0 5% 0 0'/>
            </div>
            <div className={styles.table}>
                <div className={styles.header}>
                    <div className={styles.col}> User ID </div>
                    <div className={styles.col}> Name </div>
                    <div className={styles.col}> Age </div>
                    <div className={styles.col}> Sex </div>
                    <div className={`${styles.col} ${styles.flex2}`}> Email </div>
                </div>

                {listUser.map(user => {
                    return (<div key={user.id} className={styles.body}>
                        <div className={`${styles.col} ${styles.noBorTop}`}><span><Link to={`/user-form/${user.id}`}>{user.id}</Link> </span></div>
                        <div className={`${styles.col} ${styles.noBorTop}`}><span>{user.fullName}</span></div>
                        <div className={`${styles.col} ${styles.noBorTop}`}><span>{user.age}</span></div>
                        <div className={`${styles.col} ${styles.noBorTop}`}><span>{user.sex}</span></div>
                        <div className={`${styles.col} ${styles.noBorTop} ${styles.flex2}`}><span>{user.email}</span></div>
                    </div>
                    )
                })}
            </div>
        </>
    );
}

export default ListUserComponent;