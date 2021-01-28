const getInsertionSortAnimations = (arr) => {
    const animations = []
    let l = arr.length
    for(let j=1; j<l; j++){        
        let key = arr[j]
        let i = j-1
        while(i>=0 && key<arr[i]){
            animations.push(['change', i, i+1])            
            arr[i+1] = arr[i]
            arr[i] = key     
            animations.push(['swap', i, i+1])              
            animations.push(['revertChange', i, i+1])
            i -= 1
        }        
    }
    return animations
}

export default getInsertionSortAnimations

