//const App = () => "Hola Mundo con App Importado"

//CommonJS: module.exports = App
//export default App

//rafce   plantilla basica de componente

//import React from 'react'


import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <>
       <Header/>
        <Footer/>
     </>
  )
}

export default App