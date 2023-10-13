"use client"
import React, { useState, useEffect } from 'react'
// import style from './page.module.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyTitle from '../components/organisms/MyTitle'
import NavBar from '../components/molecules/NavBar'
import Landing from '../components/molecules/landing-page'
import ContactPage from '../components/organisms/contactPage'
import AboutPage from '../components/organisms/about'



const apiUrl = "https://www.jsonkeeper.com/b/MDXW"

export default function Home() {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setState(response.data);
    })
    .catch((error) => {
   
    console.error('Error fetch data', error)
    });
  }, []);


  return (
    <main style={{
      backgroundImage: "url('/img/background-restaurant-image.jpeg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: "100vh",
      width: '100vw',
      backgroundBlendMode: '25%',
  }}>
    
      <div>
        <MyTitle className="MyTitle" />
        <NavBar />
        <Landing />
        <p>{}</p>
        <ContactPage />
        <AboutPage />
      </div>
      
    </main>
    
    
  )

}