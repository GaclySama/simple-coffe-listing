import { CoffeAPIResponse } from '../interfaces/coffe.interface';

import styles from '../styles/card.module.css'
import start_fill from '../assets/Star_fill.svg';
import start from '../assets/Star.svg';


interface Props { 
  coffee: CoffeAPIResponse;
  allCoffees: boolean;
}

export const CardItem = ({ coffee, allCoffees }: Props ) => {

  const { available, image, name, popular, price, rating, votes } = coffee;

  let startToUse: string;
  coffee.rating ? startToUse = start_fill : startToUse = start;

  return (
    <div 
      className={ `${styles.card} animate__animated animate__fadeIn ${ (!allCoffees && !available ) ? styles.notDisplay : '' } ` }
    >

      <p className={ popular ? styles.popular : styles.notDisplay }><b>Popular</b></p>

      <picture className={ styles.imgContainer }>
        <img src={ image } alt="Coffee image" className={ styles.img } />
      </picture>

      <div className={ styles.row }>
        <h1 className={ styles.name }>{ name }</h1>
        <p className={ styles.price }><b>{ price }</b></p>
      </div>

      <div className={ styles.row }>
        <img src={ startToUse } alt="Start" className={ styles.startImg } />
        <p className={ styles.rating }>{ rating }</p>
        <p className={ styles.votes }>{ votes ? `(${ votes } votes)` : 'No ratings' }</p>
        <p className={ available ? styles.notDisplay : styles.soldOut } >Sold Out</p>
      </div>
      
    </div>
  )
}