import { Link } from "react-router-dom"
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"

function NavBar() {
  return (
    <nav>
      <div className={style.navConteiner}>
        <img className={style.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt="" width="200" />
        <SearchBar/>
        <Link to = "forms"> 
        <button className={style.button2}> New Pokemon </button> 
        </Link>
      </div>
    </nav>
  )
}

export default NavBar