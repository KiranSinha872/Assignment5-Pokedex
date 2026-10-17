import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard";
import { Link } from "react-router"

function PokemonList(){
  const [pokemons, setPokemons] = useState([]);
  const [search,setSearch] = useState("")
  const [loading, setLoading]=useState(true);
  const [error, setError] = useState("");


  useEffect(()=>{
    async function getPokemons(){
      try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        const data = await response.json();
        setPokemons(data.results)
      }
      catch(err) {
        setError("Failed to load pokemon");
      }
      setLoading(false)
    }
    getPokemons()
  },[])

  if(loading){
    return <p>Loading...</p>
  }

  if (error) {
      return <p>{error}</p>;
  }


  return (
    <div style={{ textAlign:"center", padding: "20px" }}>
      <h1>Pokemon</h1>
      <Link to="/">HOME</Link>

      <div>
        <input type="text" placeholder="Search " value={search}
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
          style={{padding:"8px", margin: "15px 0", border:"1px solid red", borderRadius: "5px" }}/>
      </div>

      <div style={{display:"flex", flexWrap: "wrap", justifyContent:"center", gap:"105px"}}>
        {pokemons.filter((pokemon)=>pokemon.name.includes(search.toLowerCase()))
          .map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon}/>
        ))}
      </div>
    </div>
  )
}

export default PokemonList