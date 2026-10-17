import { Routes, Route } from "react-router";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/pokemon" element={<PokemonList/>}/>
      <Route path="/pokemon/:name" element={<PokemonDetail />}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;