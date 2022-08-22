import { Card } from "./Card";
import styles from '../styles/CardsContainer.module.css'

export const CardsContainer = ({cards}) => {
    return(
        <div className={styles.cards_container}>
            {cards.map((el) => {
                const date = el[0];
                console.log(date);
                return el[1].map((element) => {
                    return(
                        <Card
                            id={element.id}
                            key={element.id}
                            date={date}
                            name={element.name.split('(').pop().split(')').shift()}
                            diameter={element.estimated_diameter.meters.estimated_diameter_min}
                            distance={element.close_approach_data[0].miss_distance.kilometers}
                            status={element.is_potentially_hazardous_asteroid}
                        />
                    );
                    })
                })
            }   
        </div>)
}