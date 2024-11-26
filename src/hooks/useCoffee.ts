import { useEffect, useState } from 'react';

import { getCoffeApi } from '../helpers/getCoffeApi';
import { CoffeAPIResponse } from '../interfaces/coffe.interface';

export const useCoffee = () => {

  const [coffees, setCoffees] = useState<CoffeAPIResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCoffees = async () => {
    const coffees = await getCoffeApi();

    setCoffees( coffees );
    setIsLoading(false);
  };

  useEffect(() => {
    getCoffees();
  }, []);
  
  return {
    coffees,
    isLoading
  }
}