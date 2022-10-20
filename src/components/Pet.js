import React from "react";

function Pet({pet, onAdoptPet}) {

  const genderSymbol = pet.gender === "male" ? '♂':'♀'

  const adopt = <button className="ui disabled button">Already adopted</button> 
  const adopted = <button className="ui primary button" onClick={() => onAdoptPet(pet.id)}>Adopt pet</button>

  const renderIsAdopted = pet.isAdopted ? adopt:adopted

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {genderSymbol + pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{`Age: ${pet.age}`}</p>
          <p>{`Weight: ${pet.weight}`}</p>
        </div>
      </div>
      <div className="extra content">
        {renderIsAdopted}
      </div>
    </div>
  );
}

export default Pet;
