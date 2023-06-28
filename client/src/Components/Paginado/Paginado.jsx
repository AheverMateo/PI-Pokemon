
const Paginado = ({ pokemonsPerPage, pokemons, paginado }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
      pageNumber.push(i);
    }
  
    return (
      <nav>
        <ul>
          {pageNumber &&
            pageNumber.map((number) => (
                <button onClick={() => paginado(number)}>{number}</button>
            ))}
        </ul>
      </nav>
    );
  };
  export default Paginado;
  