// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

//bubbleSort algorithm
const getBubbleSortAnimations = (array) => {
    var swapp;
    var n = array.length-1;
    var x=array;
    const animations = []
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
                animations.push(['change', i, i+1]) 
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                animations.push(['swap', i, i+1])
                animations.push(['revertChange', i, i+1]) 
                swapp = true;
            }
        }
        n--;
    } while (swapp);
   return animations; 
  }

//bubbleSort Animations
const bubbleSort = (arr) => {
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

export default bubbleSort