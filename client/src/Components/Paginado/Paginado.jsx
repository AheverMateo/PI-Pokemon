import style from "./Paginado.module.css"
const Paginado = ({ pokemonsPerPage, pokemons, paginado }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
      pageNumber.push(i);
    }
  
    return (
      <nav>
        <ul className={style.pagination}>
          {pageNumber &&
            pageNumber.map((number) => (
              <li key={number}>
                <button
                  className={style.button}
                  onClick={() => paginado(number)}
                >
                  {number}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    );
}    
  export default Paginado;
  