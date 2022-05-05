function bigToSmall(arr){
  let result = []
  for (let i = 0; i < arr.length; i++){
    result = result.concat(arr[i])
  }
  let sorted = result.sort(function(a, b){return b- a})

  
  return sorted.join('>')
}
