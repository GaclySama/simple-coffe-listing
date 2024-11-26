import { Background } from './components/Background';
import { MainCard } from './components/MainCard';
import { useCoffee } from './hooks/useCoffee';


export const CoffePage = () => {

  const { coffees, isLoading } = useCoffee();

  return (
    <>
      <Background />

      <main>
        <MainCard coffees={ coffees } isLoading={ isLoading } />
      </main>
    </>
  )
}