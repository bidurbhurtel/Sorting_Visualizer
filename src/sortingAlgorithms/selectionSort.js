// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

//selectionSort algorithm
const getSelectionSortAnimations = (array) => {
    const animations = []
    let l = array.length
    for (let i=0; i<l; i++){
        let minIndex = i
        // animations.push(['change', i, minIndex])
        for (let j = i+1; j<l; j++){
            // animations.push(['revertChange', i, minIndex])
            animations.push(['change', i, j])
            animations.push(['revertChange', i, j])   
            if (array[j] < array[minIndex] ){
                animations.push(['revertChange', i, minIndex])                
                minIndex = j
                animations.push(['change', i, minIndex])
            }
        }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
        animations.push(['swap', i, minIndex])              
        animations.push(['revertChange', i, minIndex])
    }
    return animations    
}

//selectionSort Animations
    const selectionSort = (arr) => {
    const animations = getSelectionSortAnimations(arr)        
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

export default selectionSort