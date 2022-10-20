import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
const api = "http://localhost:3001/pets"

function App() {
  const [pets, setPets] = useState([])
  const [filters, setFilters] = useState("all")

  const onChangeType = type => {
    setFilters(type)
  }

  const onFindPetsClick = () => {
    fetch(api)
    .then(resp => resp.json()) 
    .then(data => {
      if (filters === "all") setPets(data)
      else {
        setPets(data.filter(pet => pet.type === filters))
      }
    })
  }

  const onAdoptPet = id => {
    const adoptedPet = pets.findIndex(pet => pet.id === id)
    pets[adoptedPet].isAdopted = true
    setPets([...pets])
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
