import { IconX } from "@tabler/icons-react";
import { colorByType } from "../constants/pokemon";
import PokemonDetail from "./PokemonDetail";

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  return (
    <section
      className={`mt-4 fixed lg:hidden top-0 left-0 right-0 h-screen transition-all duration-500 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${colorByType[pokemon?.types[0]]}`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconX size={34} stroke={4} />
      </button>
      <article
        className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>
    </section>
  );
};
export default ModalPokemon;
