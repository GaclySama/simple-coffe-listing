import spinner from '../assets/vector.svg'

export const Header = () => {
  return (
    <header className="header">
        <picture>
          <img className="spinner" src={ spinner } alt="spinner" />
        </picture>
        
        <h1 className="title">Our Collection</h1>  

        <p className="text-body">
          Introducing our Coffee Collection, a selection of unique coffees
          from different roast types and origins,expertly roasted in small
          batches and shipped fresh weekly.
        </p>
    </header>
  )
}