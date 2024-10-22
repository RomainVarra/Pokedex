import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const pokemonIndexNext = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	const pokemonIndexPrecedent = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};

	return (
		<>
			<div>
				<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			</div>
			<div>
				{pokemonIndex > 0 && (
					<button type="button" onClick={pokemonIndexPrecedent}>
						Précédent
					</button>
				)}
			</div>

			<div>
				{pokemonIndex < pokemonList.length - 1 && (
					<button type="button" onClick={pokemonIndexNext}>
						Suivant
					</button>
				)}
			</div>
		</>
	);
}

export default App;
