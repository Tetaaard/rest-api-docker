import React from 'react'
import {Link } from 'react-router-dom'
import { useState, useEffect} from 'react';

import logo from '../assets/logo.png';
import './Vote.css';

function Vote() {
  let i = Math.floor(Math.random() * 65)

  const [picture, setPicture] = useState([])
  const [score_positif, setScorePositif] = useState('');
  const [score_negatif, setScoreNegatif] = useState("");
  const [pictureId,setPictureId]=  useState(null)
  const [error, setError] = useState(false)

  useEffect(()=>{
    getPicture()
  },[])

  async function getPicture(){
    const url = "http://localhost:8080/api"
    try{
      const response = await fetch(url)
      const data = await response.json()
      setPicture(data[i])
      setScorePositif(data[i].score_positif)
      setScoreNegatif(data[i].score_negatif)
      setPictureId(data[i].id)
    }catch(err){
      setError(true)
      console.log(err)
    }
  }

  async function updateDislike(){
    let item = { score_negatif:score_negatif + 1}
    const url = `http://localhost:8080/api/${pictureId}`
    try{
      const response = await fetch(url, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(item)})
      const data = await response.json()
      console.log("Rechargement dislike")
      window.location.reload(false); 
    }catch(err){
      setError(true)
      console.log(err)
    }
  
  }

  async function updateLike(){
    let item = {score_positif:score_positif + 1}
    const url = `http://localhost:8080/api/${pictureId}`
    try{
      const response = await fetch(url, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(item)})
      const data = await response.json()
      window.location.reload(false); 
    }catch(err){
      setError(true)
      console.log(err)
    }
   
  }

  if (window.matchMedia("(min-width: 992px)").matches) {
    return ( 
      <div className="container">
        <div className="header">
          <h1>Le meilleur site de Q du <u>monde.</u></h1>
          <div className="text-header">
            <p>On est un peu obsédés par le Q,du coup on a décidé de créer un site dédié à ça.
              <br></br>On espère que vous aimerez tout autant que nous.Cliquez sur le bouton et <br></br>découvrez des Q du monde entier, et votez pour vos préférés !
            </p>
          </div>
        </div>
        {error && <p>Impossible de se connecter au server </p>}
        <div className="vote-container">
        <button onClick={updateDislike}  className="round btn-dislike"></button>
          <div class="picture">
            <strong><p className="id">#{picture.id}</p></strong>
            <div className="score">
              <p className="info green">{picture.score_positif}</p>
              <p className="info red">{picture.score_negatif}</p>
            </div>

            <img className="random-pic" src={picture.path} alt=""/>
          </div>
          <button onClick={updateLike }  className="round btn-like"> </button>
          </div>
          <div className="nav">
            <Link className="btn-v mail" to="/"><i class="far fa-paper-plane"></i>Envoyez-nous votre Q à tulasvumonq@sitedeq.fr</Link>
            <Link className="btn-v go-ranking" to="/ranking">Le classement qui pue pas du Q</Link>
          </div>
          <div className="footer-container">
          <a href="https://la-quincaillerie.fr"><center><img className="logo" src={logo} alt="logo-quincaillerie-footer"/></center></a>
        </div>
      </div>
    );
  }else{
    return ( 
      <div className="container">
        <div className="header">
          <h1>Le meilleur site de Q du <u>monde.</u></h1>
          <div className="text-header">
            <p>On est un peu obsédés par le Q,du coup on a décidé de créer un site dédié à ça.
              <br></br>On espère que vous aimerez tout autant que nous.Cliquez sur le bouton et <br></br>découvrez des Q du monde entier, et votez pour vos préférés !
            </p>
          </div>
        </div>
        {error && <p>Impossible de se connecter au server </p>}
          <div class="picture">
            <strong><p className="id">#{picture.id}</p></strong>
            <div className="score">
              <p className="info green">{picture.score_positif}</p>
              <p className="info red">{picture.score_negatif}</p>
            </div>
            <img className="random-pic" src={picture.path} alt=""/>
          </div>
          <div className="div-btn">
            <button onClick={updateDislike}  className="round btn-dislike"></button>
            <button onClick={updateLike }  className="round btn-like"> </button>
          </div>
          <div className="nav">
            <Link className="btn-v mail" to="/">Envoyez-nous votre Q à tulasvumonq@sitedeq.fr</Link>
            <Link className="btn-v go-ranking" to="/ranking">Le classement qui pue pas du Q</Link>
          </div>
          <div className="footer-container">
          <a href="https://la-quincaillerie.fr"><center><img className="logo" src={logo} alt="logo-quincaillerie-footer"/></center></a>
        </div>
      </div>
    );
  }


} 

export default Vote;