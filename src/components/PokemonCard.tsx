interface PokemonCardProps {
	pokemon: {
		name: string;
		imgSrc?: string;
	};
}

function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>"???"</p>
			)}
			<h1>{pokemon.name}</h1>
		</figure>
	);
}

export default PokemonCard;
