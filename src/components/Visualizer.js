import React, { useState, useEffect }  from 'react'
import { Navbar, Nav, Container, Button, ButtonGroup} from 'react-bootstrap'
import '../Visualizer.css'
import mergeSort from '../sortingAlgorithms/mergeSort'
import bubbleSort from '../sortingAlgorithms/bubbleSort'
import selectionSort from '../sortingAlgorithms/selectionSort'
import insertionSort from '../sortingAlgorithms/insertionSort'

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;

const Visualizer = () => {
  
  const [arr, setArr] = useState([])

  useEffect(() => {
      resetArray()
  }, [])

  //function to generate random integers
  function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }
  
  //function to reset array
  const resetArray = () => {
      const arr = []
              for (let i=0; i<NUMBER_OF_ARRAY_BARS; i++){
          arr.push(getRndInteger(5,500))
      }
      setArr(arr)
  }
  
  return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Sorting Visualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">                                                                            
                    <ButtonGroup>
                      <Button variant='dark' onClick={resetArray}>Generate New Array</Button>
                      <Button variant='dark' onClick={() => mergeSort(arr)}>Merge Sort</Button>
                      <Button variant='dark' onClick={() => bubbleSort(arr)}>Bubble Sort</Button>
                      <Button variant='dark' onClick={() => selectionSort(arr)}>Selection Sort</Button>
                      <Button variant='dark' onClick={() => insertionSort(arr)}>Insertion Sort</Button>
                    </ButtonGroup>               
                    </Nav>                
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <h1></h1>          
        <div className='array-container'>
            {arr.map((value,idx) => {
                return (
                <div 
                    className='array-bar'
                    key={idx} 
                    style={{height: `${value}px`}}>                    
                </div>                
            )})}                
        </div>          
      </>
  )
}

export default Visualizer

