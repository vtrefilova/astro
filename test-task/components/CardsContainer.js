import { Card } from "./Card";
import styles from '../styles/CardsContainer.module.css'
import { FilterContext } from "../contexts/contexts";
import { useContext } from "react";
import cloneDeep from 'lodash.clonedeep';

export const CardsContainer = ({cards}) => {
    const filters = useContext(FilterContext);
    let cardsToRender = [];
    if (filters.danger.value) {
        cards.map((el) => {
            const arr = el[1].filter(element => element.is_potentially_hazardous_asteroid === true);
            cardsToRender.push([el[0], arr]);
        });
    } else cardsToRender = cloneDeep(cards);

    return(
        <div className={styles.cards_container}>
            {cardsToRender.map((el) => {
                const date = el[0];
                return el[1].map((element) => {
                    return(
                        <Card
                            id={element.id}
                            key={element.id}
                            date={date}
                            name={element.name.split('(').pop().split(')').shift()}
                            diameter={element.estimated_diameter.meters.estimated_diameter_min}
                            distance={element.close_approach_data[0].miss_distance}
                            status={element.is_potentially_hazardous_asteroid}
                            metrics={filters.metrics.value}
                        />
                    );
                    })
                })
            }   
        </div>)
}