import { useContext } from 'react';
import styles from '../styles/Checkbox.module.css';
import cn from 'classnames';
import { FilterContext } from "../contexts/contexts";

export const Checkbox = () => {
    const filters = useContext(FilterContext);
    const className = cn(styles.checkbox, filters.danger.value ? styles.active : "");
  
    return (
        <div className={styles.checkbox_block}>
            <input
            className={styles.checkbox_input}
            type="checkbox"
            />
            <div className={styles.checkbox_frame}>
            <span
                className={className}
                aria-hidden="true"
                onClick={filters.danger.handleToggle}
            />
            </div>
            <label>
                Показать только опасные
            </label>
        </div>
    );
  }