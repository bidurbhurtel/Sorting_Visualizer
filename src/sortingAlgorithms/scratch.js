//Insertion Sorting Function
const getInsertionSortAnimations = (arr) => {
    const animations = []
    let l = arr.length
    for(let j=1; j<l; j++){        
        let key = arr[j]
        let i = j-1
        //console.log("######")
        while(i>=0 && key<arr[i]){
            animations.push(['change', i, i+1])            
            arr[i+1] = arr[i]
            arr[i] = key     
            animations.push(['swap', i, i+1])        
            //console.log(arr)
            animations.push(['revertChange', i, i+1])
            i -= 1
        }        
    }
    return animations
}

//Bubble Sorting Function

let arr = []
for (var i=0, t=10; i<t; i++){
    arr.push(Math.floor(Math.random() * 100))
}

console.log(arr)
animations = getInsertionSortAnimations(arr)
console.log(arr)
console.log(animations)
for (let i = 0; i < animations.length; i++){
    const [action, barOneIdx, barTwoIdx] = animations[i]
    if(action === 'change'){
        console.log(barOneIdx, barTwoIdx)
    } 
    else if(action === 'revertChange') {
        console.log('######')
        console.log(barOneIdx, barTwoIdx)
    }   
    else if(action === 'noChange'){
        console.log('-------')
        console.log(barOneIdx, barTwoIdx)
    }
}
