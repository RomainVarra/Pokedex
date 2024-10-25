import PokemonCard from "./PokemonCard";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	pokemonList: Pokemon[];
	setPokemonIndex: (index: number) => void;
}

function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }: NavBarProps) {
	return (
		<>
			<div>
				<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			</div>
			<div>
				{pokemonList.map((pokemon, index) => (
					<button
						key={pokemon.name}
						onClick={() => {
							setPokemonIndex(index);
							if (pokemon.name === "pikachu") {
								alert("Pika pikachu !!!");
							}
						}}
						type="button"
					>
						{pokemon.name}
					</button>
				))}
			</div>
		</>
	);
}

export default NavBar;
