import { Link } from "react-router"

function PokemonCard({pokemon}){
  const num = pokemon.url.split("/")[6]

  return (
    <Link
      to={"/pokemon/"+pokemon.name}
      style={{ textAlign:"center", textDecoration: "none", color:"black", border: "1px solid #ddd", borderRadius:"10px", padding: "10px", width:"180px" }}
    >
      <img
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+num+".png"}
        alt={pokemon.name}
        style={{width: "100%"}}
      />
        <h3>{pokemon.name}</h3>

      <p>{num}</p>
    </Link>
  )
}

export default PokemonCard;