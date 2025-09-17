import React from 'react';

const Division = (props) => {
  if (props.num2 > props.num1) {
    if (props.num1 === 0) {
      return <div>Erro: Não é possível dividir por zero.</div>;
    }
    return (
      <div>O resultado de (num2) {props.num2} / {props.num1} (num1) é = {props.num2 / props.num1}</div>
    )
  }

  else if (props.num2 === 0) {
    return <div>Erro: Não é possível dividir por zero.</div>;
  }
  return (
    <div>O resultado de (num1) {props.num1} / {props.num2} (num2) é = {props.num1 / props.num2}</div>
  );
}

export default Division;
