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
import MenuCard from '../components/molecules/menuCard'


export default function Home() {
  const apiUrl = "https://www.jsonkeeper.com/b/MDXW"
  const [data, setData] = useState(null);
  // const [menuMap, setMenuMap] = useState();

  let menuMap;

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        console.log(response.data)
        setData(response.data);
    })
    .catch((error) => {
   
    console.error('Error fetch data', error)
    });
    console.log(data)
  }, []);




  return (
    <main style={{
      backgroundImage: "url('/img/background-restaurant-image.jpeg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: "100vh",
      width: '100vw',
      // opacity: '25%',
  }}>
    
      <div>
        <MyTitle className="MyTitle" />
        <NavBar />
        <Landing />
        <p>{}</p>
        {data && <MenuCard data={data} />}
        {/* {menuMap} */}
        <AboutPage />
        <ContactPage />
      </div>
      
    </main>
    
    
  )

}