import styles from '../styles/card.module.css';


interface Props {
  allCoffees: boolean;
  handleCoffes: () => void;
}

export const Selector = ({ allCoffees, handleCoffes }: Props ) => {

  return (
    <>
      <div className={ styles.row }>

        <button 
          className={`btn ${ allCoffees ? styles.btnActive : '' }` }
          onClick={ handleCoffes }
        >All Products</button>

        <button 
          className={`btn ${ allCoffees ? '' : styles.btnActive }` }
          onClick={ handleCoffes }
        >Available Now</button>

      </div>
    </>
  )
}