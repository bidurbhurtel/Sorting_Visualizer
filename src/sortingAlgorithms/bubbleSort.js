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

  export default getBubbleSortAnimations