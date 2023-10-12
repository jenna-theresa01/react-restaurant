"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import MyTitle from '../components/organisms/MyTitle'
import NavBar from '../components/molecules/NavBar'
// import BackgroundImg from '../components/atoms/background-img'



export default function Home() {
// call to API 
async function callAxios() {

  const apiUrl = "https://www.jsonkeeper.com/b/MDXW"
  const result = await axios.get(apiUrl);
  console.log(result)
}
callAxios()

  return (
    <main style={{
      backgroundImage: "url('/img/background-restaurant-image.jpeg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  }}>
    
      <div>
        <MyTitle className="MyTitle" />
        <NavBar />
      </div>
      
    </main>
    
    
  )

}