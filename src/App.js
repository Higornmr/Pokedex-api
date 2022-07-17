import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import  Pokedex  from "./componentes/Pokedex";
import Searchbar from "./componentes/Searchbar";


function App() {
  useEffect(()=>{
  console.log("carregou")
})
  return (
    <div>
      <Navbar />
      <Searchbar/>
      <Pokedex />
    </div>
  );
};

export default App;
