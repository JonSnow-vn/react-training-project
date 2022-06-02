import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

type ButtonProps = {
    type: string
    label: string,
    action: Function | string 
    margin?: string
    typeButton?: "button" | "submit" | "reset" | undefined
}

function Button({ type, label, action, margin, typeButton }: ButtonProps) {
    let actionButton: Function = () => { };
    let toPath: string = '';
    if (typeof action === 'function') {
        actionButton = action;
    } else {
        toPath = action;
    }

    return (
        <div style={{ margin: margin }} >
            {type === 'button' && <button type={typeButton} className={styles.btn} onClick={() => actionButton()}>{label}</button>}
            {type === 'link' && <Link to={toPath} className={`${styles.btn} ${styles.link}`}>{label}</Link>}
        </div>
    );
}

export default Button;