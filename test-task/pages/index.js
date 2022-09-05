//import '../styles/globals.css';
import { useEffect, useState, useCallback } from "react";
import MainLayout from "../components/MainLayout";
import { CardsContainer } from '../components/CardsContainer';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { Filters } from "../components/Filters";
import { FilterContext } from "../contexts/contexts";

export default function HomePage() {
    const [metricsFilter, setMetricsFilter] = useState('km');
    const [dangerFilter, setDangerFilter] = useState(false);
    const filters = {
        metrics: {
            value: metricsFilter,
            onMetricsChange: (e) => {
                setMetricsFilter(e.target.id);
            }
        },
        danger: {
            value: dangerFilter,
            handleToggle: () => {
                setDangerFilter(prev => !prev);
            }
      }};

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 2);

    const [curDate, setCurDate] = useState(today);
    const [nextDate, setNextDate] = useState(tomorrow);
    
    const [asteroidsList, setAsteroidsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [loading, setLoading] = useState(true);
    let elementsCount;

    const scrollHandler = useCallback((e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setCurDate(prev => {
                const today = new Date(prev);
                today.setDate(today.getDate() + 3);
                return today;
            });
            setNextDate(prev => {
                const tomorrow = new Date(prev);
                tomorrow.setDate(tomorrow.getDate() + 3);
                return tomorrow;
            });
            setFetching(true);
            console.log('render_1');
        }
    }, [curDate, nextDate])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        console.log('render_2');
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    useEffect(() => {
        console.log('render_3');
        setLoading(true);
        if(fetching) {
            axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${curDate.toISOString().split('T')[0]}&end_date=${nextDate.toISOString().split('T')[0]}&api_key=sKc0vTjEqW4ggwGSUVvl5k8aoLKuLEuYevAhrcTz&_limit=20&_page=${currentPage}`)
            .then(res => {
                const sortedData = Object.entries(res.data.near_earth_objects).sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());
                setAsteroidsList([...asteroidsList, ...sortedData]);
                elementsCount = res.data.element_count;
                setCurrentPage(prevValue => prevValue + 1);
                setLoading(false);
            })
            .finally( () => {
                setFetching(false);
            })
        }
    }, [fetching])
    
    return (
        <FilterContext.Provider value={filters}>
            <style jsx global>{`
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                
                * {
                box-sizing: border-box;
                }
                
                @media (prefers-color-scheme: dark) {
                html {
                    color-scheme: dark;
                }
                body {
                    background-color: white;
                }
                }
            `}</style>
            <MainLayout>
                <div className={styles.page_body}>
                    <div className={styles.page_description}>Ближайшие подлеты</div>
                    <div className={styles.line}/>
                    <Filters/>
                    <div className={styles.one_more_container}>
                        <CardsContainer cards = {asteroidsList}/>
                    </div>
                </div>
            </MainLayout>
        </FilterContext.Provider>
    )
}