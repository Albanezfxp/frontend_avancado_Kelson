import React, { useState } from 'react';
import "../styles/HookMegaSena.css"

const HookMegaSena = () => {

  const [numeroSorteado, setNumeroSorteado] = useState('');
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  function sortearNumero() {
    if (numerosSorteados.length === 6) {
      alert('Já temos 6 números sorteados!');
      return;
    }
    const sorteado = Math.floor(Math.random() * 60) + 1;
    setNumeroSorteado(sorteado);
    setNumerosSorteados([...numerosSorteados, sorteado]);
  }

  return (
    <div>
      <h1>Sorteador da Mega em React!</h1>
      <button onClick={sortearNumero}>Sortear Número</button>
      <h2>Último Número sorteado: {numeroSorteado}</h2>
     <h2>Sorteados: {numerosSorteados.map((n, i) => (
  <span key={i}>{n}</span>
))}</h2>
    </div>
  );
};

export default HookMegaSena;