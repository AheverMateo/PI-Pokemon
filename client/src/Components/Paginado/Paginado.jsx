import style from "./Paginado.module.css"
import { useState, useEffect } from 'react';

const Paginado = ({ pokemonsPerPage, pokemons, paginado, currentPage }) => {
  const [activeButton, setActiveButton] = useState(currentPage);

  useEffect(() => {
    setActiveButton(currentPage);
  }, [currentPage])

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
    pageNumber.push(i);
  }

  const handleButtonClick = (number) => {
    setActiveButton(number);
    paginado(number);
  };

  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumber.map((number) => (
          <li key={number}>
            <button
              className={`${style.button} ${number === activeButton ? style.active : ''}`}
              onClick={() => handleButtonClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Paginado;

  