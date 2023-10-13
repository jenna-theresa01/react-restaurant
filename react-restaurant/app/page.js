"use client"
import React, { useState } from 'react'
// import style from './page.module.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyTitle from '../components/organisms/MyTitle'
import NavBar from '../components/molecules/NavBar'
import Landing from '../components/molecules/landing-page'
// import BackgroundImg from '../components/atoms/background-img'


const apiUrl = "https://www.jsonkeeper.com/b/MDXW"

export default function Home() {
  const [state, setState] = React.useState();

  React.useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setState(response.data);
    });
    console.log()
  }, []);


  return (
    <main style={{
      backgroundImage: "url('/img/background-restaurant-image.jpeg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: "200vh",
      backgroundBlendMode: '25%',
  }}>
    
      <div>
        <MyTitle className="MyTitle" />
        <NavBar />
        <Landing />
        <p>{}</p>
      </div>
      
    </main>
    
    
  )

}