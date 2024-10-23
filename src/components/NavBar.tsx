import React from "react";
import PokemonCard from "./PokemonCard";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	pokemonIndexNext: () => void;
	pokemonIndexPrecedent: () => void;
	pokemonList: Pokemon[];
}

function NavBar({
	pokemonIndex,
	pokemonIndexNext,
	pokemonIndexPrecedent,
	pokemonList,
}: NavBarProps) {
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

export default NavBar;
