import React, { useEffect, useState } from 'react';

const url = "/data/db.json";

const ResgatandoDados = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setAlunos(data.alunos); 
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    }

    fetchData(); 
  }, []); 

  return (
    <div>
      {alunos.length === 0 ? (
        <p>Carregando alunos...</p>
      ) : (
        alunos.map((aluno) => (
          <div key={aluno.id}>
            <p>Nome: {aluno.name}</p>
            <p>Email: {aluno.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ResgatandoDados;
