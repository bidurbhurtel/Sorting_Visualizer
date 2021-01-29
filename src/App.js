import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Visualizer from './components/Visualizer'

const App = () => {

  return (
    <>
      {/* <Header/> */}
      <main>        
        <h1></h1> 
        <Visualizer></Visualizer>        
      </main>
      <Footer/>
    </>
  );
}

export default App;
