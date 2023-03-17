const spinner2 = (arr) => {
  let delay = 100
  for(let i = 0; i < arr.length; i++){
    setTimeout(() => {
      process.stdout.write(arr[i]);
    }, delay)
    delay += 200
  }
}
const myArray = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ']

spinner2(myArray)