import Card from "../Card/Card"
import style from "./Cards.module.css"

function Cards({currentPokemons}) {
  
  return (
    <div className={style.CardsConteiner}>
        {
          currentPokemons.map(props => {
            const nameTypes = props.Types?.map(obj => obj.name)
            const types = nameTypes || props.type
            return (
              <Card
              key = {props.id}
              id = {props.id}
              name = {props.name}
              img = {props.img}
              type = {types}
              attack = {props.attack}
              defense = {props.defense}
              />
            )
          })
        }
    </div>
  )
}

export default Cards