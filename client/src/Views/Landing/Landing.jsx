import style from "./Landing.module.css"
import {Link} from "react-router-dom"

const Landing = () => {
  return (
    <div className={style.landing}>
      <img className={style.landingimg} src="https://www.mundodeportivo.com/alfabeta/hero/2023/04/pokemon-primera-generacion.1682856451.4993.jpg?" alt="" />
      <div className={style.buttonContainer}>
        <Link to="/home">
          <button className={style.button}>Mundo Pokemon</button>
        </Link> 
      </div>
    </div>
  )
}

export default Landing