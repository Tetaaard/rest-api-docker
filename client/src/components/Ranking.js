import {Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './Ranking.css';

function Ranking() {
  const [datas, setDatas] = useState([])
  const [picturesAvailable, setPicturesAvailable] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    getData()
  },[])

  async function getData() {
    const api= 'http://localhost:8080/api'
    try{
      const result = await fetch(api)
      const getResult = await result.json()
      const sortPicture = getResult.sort((rank1, rank2) => rank2.score_positif- rank1.score_positif)
      setDatas(sortPicture)
      setPicturesAvailable(true)
    }catch(err){
      setError(true)
      console.log(err)
    }
  }

  if (window.matchMedia("(min-width: 992px)").matches) {
    return (

      <div className="container">
            <div className="header">
          <h1>Le classement des meilleurs Q.</h1>
          <p>Des gros Q,des petits Q,des Q colorés,des Q bizarres...Tous les Q,sur un seuk site.<br></br>
            Voici le classement.On espère que vous aimez car on s'est vraiment cassé le Q pour le faire.Enjoy!
          </p>
        </div>
        {error && <p>Impossible de se connecter au server </p>}
          <div class="wrapper">
            {
            picturesAvailable && datas.slice(0, 8).map(picture => (
              <div className="ranking-picture" key={picture.id}>
                <strong><p className="id">#{picture.id}</p></strong>
                <div className="score">
                  <p className="info green">{picture.score_positif}</p>
                  <p className="info red">{picture.score_negatif}</p>
                </div>
                <img className="ranking-image" src={picture.path} alt=""/>
              </div>
               ))
              }
          </div>
          <div className="desktop">
            <div className="nav">
                <Link className="btn" to="/ranking">Je veux plus de Q</Link>
                <Link className="btn" to="/">Je veux voter</Link>
            </div>
          </div>
      </div>
   
    );
  } else {
    return (

      <div className="container">
            <div className="header">
          <h1>Le classement des meilleurs Q.</h1>
          <p>Des gros Q,des petits Q,des Q colorés,des Q bizarres...Tous les Q,sur un seuk site.<br></br>
            Voici le classement.On espère que vous aimez car on s'est vraiment cassé le Q pour le faire.Enjoy!
          </p>
        </div>
        {error && <p>Impossible de se connecter au server </p>}
          <div class="wrapper">
          {
            picturesAvailable && datas.slice(0, 4).map(picture => (
            <div className="ranking-picture" key={picture.id}>
                <strong><p className="id">#{picture.id}</p></strong>
              <div className="score">
                <p className="info green">{picture.score_positif}</p>
                <p className="info red">{picture.score_negatif}</p>
              </div>
              <img className="ranking-image" src={picture.path} alt=""/>
            </div>
               ))
              }
          </div>
          <div className="nav">
              <Link className="btn" to="/ranking">Je veux plus de Q</Link>
              <Link className="btn" to="/">Je veux voter</Link>
          </div>
      </div>
   
    );
  }

  
}

export default Ranking;