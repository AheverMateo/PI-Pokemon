import style from "./Details.module.css"
import {useDispatch, useSelector} from "react-redux"
import { Link, useParams } from "react-router-dom"
import { useEffect } from 'react'
import { getDetailPoke, cleanDetail } from '../../Redux/actions'
function Details() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const myDetail = useSelector((state) => state.details);

  
  useEffect(() => {
    dispatch(getDetailPoke(id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id])
  
  return (
    <div className={style.img1}>
      {Array.isArray(myDetail) ? (
        myDetail.length > 0 ? (
          <div className={style.detailConteiner}>
            <div className={style.conteinerInfo}>
              <img className={style.img2} src={myDetail[0].img} alt="" />
              <h2 className={style.info}>NAME: {myDetail[0].name}</h2>
              <h3 className={style.info}>ATTACK: {myDetail[0].attack}</h3>
              <h3 className={style.info}>LIFE: {myDetail[0].life}</h3>
              <h3 className={style.info}>DEFENSE: {myDetail[0].defense}</h3>
              <h3 className={style.info}>SPEED: {myDetail[0].speed}</h3>
              <h3 className={style.info}>HEIGHT: {myDetail[0].height}</h3>
              <h3 className={style.info}>WEIGHT: {myDetail[0].weight}</h3>
              <h3 className={style.info}>TYPE: {myDetail[0].type.join(", ")}</h3>
            </div>
          </div>
        ) : (
          <div className={style.loadingContainer}>
            <h1 className={style.loading}>Loading...</h1>
          </div>
        )
      ) : (
        myDetail ? (
          <div className={style.detailConteiner}>
            <div className={style.conteinerInfo}>
              <img className={style.img2} src={myDetail.img} alt="" />
              <h2 className={style.info}>NAME: {myDetail.name}</h2>
              <h3 className={style.info}>ATTACK: {myDetail.attack}</h3>
              <h3 className={style.info}>LIFE: {myDetail.life}</h3>
              <h3 className={style.info}>DEFENSE: {myDetail.defense}</h3>
              <h3 className={style.info}>SPEED: {myDetail.speed}</h3>
              <h3 className={style.info}>HEIGHT: {myDetail.height}</h3>
              <h3 className={style.info}>WEIGHT: {myDetail.weight}</h3>
              <h3 className={style.info}>TYPE: {myDetail.Types.map(obj => obj.name).join(", ")}</h3>
            </div>
          </div>
        ) : (
          <div className={style.loadingContainer}>
            <h1 className={style.loading}>Loading...</h1>
          </div>
        )
      )}
      <Link to="/home">
        <button className={style.backButton}>Back</button>
      </Link>
    </div>
  );
}   

export default Details