import { CoffeAPIResponse } from '../interfaces/coffe.interface';

const COFFEE_URL = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
 
export const getCoffeApi = async () => {

  const resp = await fetch(COFFEE_URL);
  
  const data: CoffeAPIResponse[] = await resp.json(); 

  const coffees = data.map<CoffeAPIResponse>( coffee => ({
    available: coffee.available,
    id:        coffee.id,
    image:     coffee.image,
    name:      coffee.name,
    popular:   coffee.popular,
    price:     coffee.price,
    rating:    coffee.rating,
    votes:     coffee.votes,
  }));
  
  return coffees;
}