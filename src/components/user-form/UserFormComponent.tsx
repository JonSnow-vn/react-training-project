import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';

import { RootState } from '../../store/store';
import { User } from '../../model/User';
import { initUser } from '../../data/initData';
import { deleteUser, addNewUser, updateUser } from '../../features/manager/managerUserSlice';
import Button from '../../common-components/Button/Button';

import styles from './UserForm.module.scss';

function UserFormComponent() {
    const { userId } = useParams();
    const [initialValues, setInitialValues] = useState<User>(initUser);
    const listUser = useSelector((state: RootState) => state.managerUser);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
        if (userId) {
            let userUpdate = listUser.find(user => user.id === Number(userId));
            if (!userUpdate) {
                navigate("/", { replace: true });
                toast.warning("No User update!", {
                    position: toast.POSITION.TOP_CENTER,
                })
            } else {
                setInitialValues(userUpdate as User);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = (userId: number) => {
        dispatch(deleteUser(userId));
        toast.success("Delete Succsess!", {
            position: toast.POSITION.TOP_CENTER,
        });
        navigate("/", { replace: true });
    }

    const handleSave = (user: User) => {
        if (user.id) {
            dispatch(updateUser(user));
        } else {
            user.id = listUser.length + 1;
            dispatch(addNewUser(user));
        }
        toast.success("Save Succsess!", {
            position: toast.POSITION.TOP_CENTER,
        });
        navigate("/", { replace: true });
    }

    const validateEmail = (value: string) => {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    const validateFullName = (value: string) => {
        let error;
        if (!value?.trim()) {
            error = 'Required';
        } else if (value.length > 60) {
            error = 'Max length is 60 characters';
        }
        return error;
    }

    const validateAge = (value: number) => {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value > 120) {
            error = 'Invalid age';
        }
        return error;
    }

    return (<div className={styles.wrapForm}>
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                handleSave(values);
                actions.setSubmitting(false);
            }}
            >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <div className={styles.row}>
                        <label htmlFor="fullName">Full name</label>
                        <span>:</span>
                        <Field id="fullName" name="fullName" className={styles.content} placeholder="Please enter full name" validate={validateFullName} />
                        {errors.fullName && touched.fullName && <div className={styles.err}>{errors.fullName}</div>}
                    </div>
                    <div className={styles.row}>
                        <label htmlFor="sex">Gender</label>
                        <span>:</span>
                        <div className={styles.content}>
                            <Field id="sex" type="radio" name="sex" value="male" /> Male
                            <Field id="sex" type="radio" name="sex" value="female" /> Female
                        </div>
                    </div>
                    <div className={styles.row}>
                        <label htmlFor="age">Age</label>
                        <span>:</span>
                        <Field id="age" type="number" className={styles.content} name="age" validate={validateAge} />
                        {errors.age && touched.age && <div className={styles.err}>{errors.age}</div>}
                    </div>
                    <div className={styles.row}>
                        <label htmlFor="email">Email</label>
                        <span>:</span>
                        <Field id="email" name="email" className={styles.content} placeholder="Please enter email" validate={validateEmail} />
                        {errors.email && touched.email && <div className={styles.err}>{errors.email}</div>}
                    </div>
                    <div className={styles.btn}>
                        <Button type="button" label='Save' action={() => { }} typeButton="submit" margin='0 8px 0 0' />
                        {userId && <Button type="button" label='Delete' action={() => { handleDelete(Number(userId)) }} margin='0 8px 0 0' />}
                        <Button type="link" label='Cancel' action={"/"} />
                    </div>
                </Form>
            )}
        </Formik>
    </div>);
}

export default UserFormComponent;