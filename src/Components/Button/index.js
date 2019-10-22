import React from 'react';

const Button = ({onClick, texto}) => (
  <>
    <button onClick={onClick}>Clique aqui</button>
    <p>{texto}</p>
  </>
)

export default Button;