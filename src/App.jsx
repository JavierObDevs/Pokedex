import Aside from "./components/Aside";
import ModalPokemon from "./components/ModalPokemon";
import Pokemons from "./components/Pokemons";
import usePokemonContext from "./hooks/usePokemonContext";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {

  const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } =
    usePokemonContext();

  

  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={
            <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
              <Pokemons />
              <Aside pokemon={pokemonDetail} isLoading={isLoading} />
              <ModalPokemon
                showModal={showDetailPokemon}
                onCloseModal={closePokemonDetail}
                pokemon={pokemonDetail}
              />
          </main>
          }></Route>
        </Route>
      </Routes>

      
    </div>
  );
}

export default App;
