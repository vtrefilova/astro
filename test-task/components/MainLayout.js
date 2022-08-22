import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/MainLayout.module.css';
import Link from 'next/link';
import backgroundImg from '../images/pic.jpg';

export default function MainLayout({children}) {
    const [pic, setPic] = useState(backgroundImg.src);
    /*useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=sKc0vTjEqW4ggwGSUVvl5k8aoLKuLEuYevAhrcTz`)
            .then(res => {
                const picOfTheDay = res.data.url;
                setPic(picOfTheDay);
            })
    }, [])
    console.log(pic);*/

    return (
        <>
            <header className={styles.layoutHeader} style={{backgroundImage: `url(${pic})`}}>
                <div className={styles.logoBlock}>
                    <h1 className={styles.logo}>ARMAGGEDON V2</h1>
                    <p>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</p>
                </div>
                <div className={styles.linkBlock}>
                <Link href="/">
                    <a>Астероиды</a>
                </Link>
                <Link href="/order">
                    <a>Заказ</a>
                </Link>
                </div>
            </header>
            <div>
                {children}
            </div>
        </>
    )
}