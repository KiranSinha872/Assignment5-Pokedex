import { Link } from "react-router"

function Home(){
  return (
    <div>
      <h1>pokedex</h1>
      <Link to="/pokemon" style={{background:"red", color: "white",padding:"10px 15px", textDecoration:"none", borderRadius: "5px"
      }}>Open Pokedex</Link>
    </div>
  )
}

export default Home;