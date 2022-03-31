// level {1/2/3}

//level2
   let arr = [1, 3, 4, 6, 7, 8]
   let ans = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
          
            ans.push(arr[i])
        }
    }
    console.log(ans)

    let str = "Elie"
   let res = ""
    for(i= 0; i < str.length; i++) {
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u")  {
           res = res + str[i].toUpperCase()
            
        } else {
            res = res + str[i]
        }
    }
    console.log(res)
   
let newArr = [1, 3, 4, 6, 7, 8, 2, 5]
let max = 0
for(let i = 0; i < newArr.length; i++) {
    if(max < arr[i]) {
        max  = arr[i]
    }
}
console.log(max)