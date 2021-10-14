const counter = document.querySelector('#counter')
console.log('counter', counter.innerText)
let count = 0
const start = () => {
  count ++ 
  console.log(count)
}
let counting = setInterval(start(), 1000 ) 