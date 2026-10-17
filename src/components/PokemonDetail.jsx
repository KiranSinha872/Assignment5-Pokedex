import { useState, useEffect } from "react"
import { Link, useParams } from "react-router";


function PokemonDetail(){
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null);
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPokemon(){
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name);
        if(response.ok){
          const data = await response.json()
          setPokemon(data);
        }
        else {
          setError("Pokemon not found")
        }
      } catch(err){
        setError("Failed to load pokemon");
      }
      setLoading(false)
    }
    getPokemon();
  },[name])

  if (loading){
    return <p>Loading...</p>
  }


  if(error) {
    return (
      <div style={{textAlign: "center", marginTop:"20px"}}>
        <p>{error}</p>
          <Link to="/pokemon">Back</Link>
      </div>
    )
  }

  return (
    <div style={{ textAlign:"center", margin: "20px auto", maxWidth:"400px", border: "1px solid red", borderRadius:"10px", padding: "50px" }}>
      <Link to="/pokemon">Back</Link>

      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} style={{width:"100%"}}/>

      {pokemon.types.map((item)=>(
        <p key={item.type.name}>{item.type.name}</p>
      ))}


      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>

      {pokemon.stats.map((item) => (
          <p key={item.stat.name}>{item.stat.name}: {item.base_stat}</p>
      ))}
    </div>
  )
}

export default PokemonDetail;