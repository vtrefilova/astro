import safeImg from '../images/safe_asteroid.svg';
import dangerousImg from '../images/dangerous_asteroid.svg';
import radiusIcon from '../images/radius_icon.svg';
import distanceIcon from '../images/distance_icon.svg';
import Image from 'next/image';
import styles from '../styles/Card.module.css';

export const Card = ({date, name, diameter, distance, status, id, metrics}) => {
    const month = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
    const d = new Date(date);
    const monthName = month[d.getMonth()];
    const correctDate = `${d.getDate()} ${monthName} ${d.getFullYear()}`;

    const handleClick = () => {

    }
    return (
        <div className={styles.card}>
            <div className={styles.card_date}>{correctDate}</div>
            <div className={styles.card_block}>
                <Image src={status ? dangerousImg : safeImg}/>
                <div className={styles.card_block_info}>
                    <div className={styles.asteroid_name}>Астероид {name}</div>
                    <div className={styles.card_block_with_icon}>
                        <Image 
                            src={radiusIcon}
                        />
                        <div style={{marginLeft: '7px'}}>{Math.round(diameter)} м</div>
                    </div>
                    <div className={styles.card_block_with_icon}>
                        <Image
                            src={distanceIcon}
                        />
                        <div>
                            {metrics === 'km' ? 
                            `${Math.round(distance.kilometers)} км` :
                            `${Math.round(distance.lunar)} лунных орбит`}
                        </div>
                    </div>
                    <div>{status ? 'Опасен' : 'Не опасен'}</div>
                </div>
            </div>
            <button className={styles.card_button} id={id}>Уничтожить</button>
        </div>
    );
}