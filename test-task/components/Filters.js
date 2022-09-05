import Link from "next/link";
import styles from '../styles/Filters.module.css';
import { useState, useContext } from 'react';
import cn from 'classnames';
import { FilterContext } from "../contexts/contexts";
import { Checkbox } from "./Checkbox";

export const Filters = () => {
    const filters = useContext(FilterContext);
    console.log(filters);

    const className = cn(styles.filter_button, filters.metrics.value === 'lo' ? styles.selected : '');
    const oneMoreClassName = cn(styles.filter_button, filters.metrics.value === 'km' ? styles.selected : '');

    return (
        <div className={styles.filters}>
            <div className={styles.filters_metrics}>
                <div>
                    Отображать расстояние:
                </div>
                <div>
                    <button 
                        className={oneMoreClassName}
                        id='km'
                        onClick={(e) => {
                            filters.metrics.onMetricsChange(e);
                        }}
                    >
                        в километрах
                    </button>
                    |
                    <button
                        className={className}
                        id='lo'
                        onClick={(e) => {
                            filters.metrics.onMetricsChange(e);
                        }}
                    >
                        в лунных орбитах
                    </button>
                </div>
            </div>
            <Checkbox/>
        </div>
    );
}