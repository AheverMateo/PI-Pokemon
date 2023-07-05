import style from "./Card.module.css"
import { Link } from "react-router-dom"
function Card(props) {
  return (
    <div className={style.cardConteiner}>
      <div className={style.pokemonContainer}>
        <img className={style.img} src={props.img} alt="" width="150px" height="150" />
        <Link to={`/details/${props.id}`}>
          <h5 className={style.name}>{props.name}</h5>
        </Link>
        <h5 className={style.attack}>ATTACK: {props.attack}</h5>
        <h5 className={style.defense}>DEFENSE: {props.defense}</h5>
        <div className={style.types}>
        {props.type.map((type, index) => (
          <ul key={index}>
            <span>{type}</span>
          </ul>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Card
