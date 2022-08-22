import Link from "next/link";
import styles from '../styles/Filters.module.css'

export const Filters = () => {
    return (
        <div className={styles.filters}>
            <div className={styles.filters_metrics}>Отображать расстояние:
                <div>в километрах</div>
                |
                <div>в лунных орбитах</div>
            </div>
            <div>
                <input type='checkbox'></input>
                <label htmlFor="">Показать только опасные</label>
            </div>
        </div>
    );
}