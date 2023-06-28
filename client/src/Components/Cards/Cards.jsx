import Card from "../Card/Card"
import style from "./Cards.module.css"

function Cards({currentPokemons}) {
  
  return (
    <div className={style.CardsConteiner}>
        {
          currentPokemons.map(props => {
            return (
              <Card
              name = {props.name}
              img = {props.img}
              type = {props.type}
              />
            )
          })
        }
    </div>
  )
}

export default Cards