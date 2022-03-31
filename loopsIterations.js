// level {1/2/3}
  //level 2 is
   let n = 6
  function fibbonaci(n) {
    
      if(n ===  1) {
          return [0,1]
   
      } else {
          var arr = fibbonaci(n-1)
         arr.push(arr[arr.length-1] + arr[arr.length-2])
         return (arr)
      }
    
  }
  console.log(fibbonaci(n))
