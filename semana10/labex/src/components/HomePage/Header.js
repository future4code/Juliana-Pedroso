import React from "react";
import Cover from '../../img/astronaut.jpg'

export default function Header() {
  return (
    <div>
      {/* <img src ={Cover} alt="Capa"/> */}
      <button>Sign in</button>
      <button>Sign up</button>
      <div>
        <input placeholder="Buscar viagem"></input>
      </div>
    </div>
  );
}
