import React from 'react'
import { useState } from 'react'

export default function Header() {

  const [number, setNumber] = useState(1)

  function RandomNumberGenerate() {
    setNumber(Math.floor((Math.random() * 10) + 1));
    if(number == number){

      setNumber(Math.floor((Math.random() * 10) + 1));
    }else{
      null
    }
  }

  return (
    <div>
      <img src={} />
      <button onClick={RandomNumberGenerate}>Gerar</button>
    </div>
  )
}
