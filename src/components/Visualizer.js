import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import '../Visualizer.css'
import getMergeSortAnimations from '../sortingAlgorithms/mergeSort'
import getBubbleSortAnimations from '../sortingAlgorithms/bubbleSort'
import getInsertionSortAnimations from '../sortingAlgorithms/insertionSort'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const Visualizer = () => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        resetArray()
    }, [])

    //function to generate random integers
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    const resetArray = () => {
        const arr = []
                for (let i=0; i<NUMBER_OF_ARRAY_BARS; i++){
            arr.push(getRndInteger(5,500))
        }
        setArr(arr)
    }

    const mergeSort = () => {
        const animations = getMergeSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    const bubbleSort = () => {
      const animations = getBubbleSortAnimations(arr)        
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [action, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;          
        if(action === 'change') {                 
          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        } else if(action === 'swap') {                    
          setTimeout(() => {
            let temp = barOneStyle.height
            barOneStyle.height = barTwoStyle.height
            barTwoStyle.height = temp
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        } else if (action === 'revertChange'){
          setTimeout(() => {              
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
        
    }

    const selectionSort = () => {
        
    }

    const insertionSort = () => {
        const animations = getInsertionSortAnimations(arr)        
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const [action, barOneIdx, barTwoIdx] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;          
          if(action === 'change') {                 
            setTimeout(() => {
              barOneStyle.backgroundColor = SECONDARY_COLOR;
              barTwoStyle.backgroundColor = SECONDARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
          } else if(action === 'swap') {                    
            setTimeout(() => {
              let temp = barOneStyle.height
              barOneStyle.height = barTwoStyle.height
              barTwoStyle.height = temp
              barOneStyle.backgroundColor = SECONDARY_COLOR;
              barTwoStyle.backgroundColor = SECONDARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
          } else if (action === 'revertChange'){
            setTimeout(() => {              
              barOneStyle.backgroundColor = PRIMARY_COLOR;
              barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    return (
        <div>
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
            <Row>
                <Col>
                    <Button variant='dark' onClick={resetArray}>Generate New Array</Button>
                </Col>
                <Col>
                    <Button variant='dark' onClick={mergeSort}>Merge Sort</Button>
                </Col>
                <Col>
                    <Button variant='dark' onClick={bubbleSort}>Bubble Sort</Button>
                </Col>
                <Col>
                    <Button variant='dark' onClick={selectionSort}>Selection Sort</Button>
                </Col>
                <Col>
                    <Button variant='dark' onClick={insertionSort}>Insertion Sort</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Visualizer

