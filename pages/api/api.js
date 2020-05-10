import React from 'react';
import Axios from 'axios';


export default async function Frase(){
  let resultado = Axios.Get('https://allugofrases.herokuapp.com/fraseAleatoria')
  return resultado;
}

    
