import { useState } from 'react';

import { CoffeAPIResponse } from '../interfaces/coffe.interface';
import { CardItem, Header, Selector } from './';

interface Props {
  isLoading: boolean;
  coffees: CoffeAPIResponse[];
}

export const MainCard = ({ isLoading, coffees }: Props ) => {

  const [allCoffees, setAllCoffees] = useState(true);

  const handleCoffes = () => {
    setAllCoffees( !allCoffees );
  };

  return (
    <article className="container">

      <Header />

      <Selector handleCoffes={ handleCoffes } allCoffees={ allCoffees } />

      <section className='card-container'>
        {
          isLoading 
            ? (
                <h1 style={{
                  display: 'flex',
                  color: 'white',
                  fontSize: '900',
                }}>Loading...</h1>
              )
            : (
                coffees.map( coffee => (
                  <CardItem key={ coffee.id } coffee={ coffee } allCoffees={ allCoffees } />
                ))
            )
        }
      </section>
    </article>
  )
}