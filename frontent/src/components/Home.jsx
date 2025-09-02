import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar"
import { Works } from "./Works"
import { About } from "./About";
import { Gallery } from "./Gallery";
import { Listingapi } from "./Listingapi";

export const Home = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [toactivewrk, settoactivewrk] = useState(false);
  const [toactivehme, settotoactivehme] = useState(false);
  const [toactiveabt, settoactiveabt] = useState(false);
  useEffect(()=>{
    settoactivewrk(false);
  settotoactivehme(true);
  settoactiveabt(false);
  },[]);
  const animateworkto = () => {
      settoactivewrk(true);
      settotoactivehme(false);
  settoactiveabt(false);
      
    const barHeight = "60px"
  ref.current.style.scrollMargin = barHeight
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
const animateTop = () =>{
  settoactivewrk(false);
  settotoactivehme(true);
  settoactiveabt(false);
  window.scrollTo(0, 0);
}
const animateabout = () =>{
  settoactivewrk(false);
  settotoactivehme(false);
  settoactiveabt(true);
  const barHeight = "60px"
  ref2.current.style.scrollMargin = barHeight
    ref2.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
}
window.addEventListener("scroll", function() {
  if(window.scrollY <= 60){
    settoactivewrk(false);
  settotoactivehme(true);
  settoactiveabt(false);
  }
  if(window.scrollY >= 470){
    settoactivewrk(true);
  settotoactivehme(false);
  settoactiveabt(false);
  }
  if(window.scrollY >= 1370){
    settoactivewrk(false);
  settotoactivehme(false);
  settoactiveabt(true);
  }
});
/* const isPalindrome = (str) => {
  for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("malayalam")); */
/* const isPrime = (num) => {
  if(num <=1) return false;
  for(let i=2; i<Math.sqrt(num); i++){
    if(num % i === 0) return false
  }
  return true;
}
console.log(isPrime(12)); */
/* const fibanacci = (num) =>{
  if(num <= 1) return num;
  let [fib1, fib2, fib] = [0, 1, 0];
  for(let i=2; i<=num; i++){
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }
  return fib; 
}
console.log(fibanacci(10)); */

/* const toCapitalize = (txt) => {
  //let repl = txt.replace(/[^a-zA-Z0-9\s]/g, '');
  let repl = txt.replace(/[^a-zA-Z\s]/g, '');
  let str = repl.split(" ");
  for(let i=0; i<str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }
  return str.join(" ");
}
console.log(toCapitalize("froNTEnt dEveloP%94MEnt")); */


/* const isFactorial = (n) => {
let result = 1;
for(let i=2;i<=n;i++){
  result = result * i;
}
return result;
}
console.log(isFactorial(5)); */
/* const powerofTwo = (n) =>{
  if(n<1)return false;
  while(n>1){
    if(n % 2 !== 0) return false;
    n=n/2
  }
  return true;
}
console.log(powerofTwo(4)); */

/* const toCalculate = (pN) => {
  do{
    if(pN % 2 == 0){
      pN = pN * 2;
    }else{
      pN = (3 * pN) + 1;
    }
  }while (pN != 1);
  return pN;
}
console.log(toCalculate(4)); */

  return (
    <>
    <Navbar workAct={toactivewrk}  homeAct={toactivehme}  aboutAct={toactiveabt} toWorkarea={animateworkto} toHomearea={animateTop} toAboutarea={animateabout} />
<h1 className="banner1 banner text-center">I am <span>LUQMAN</span> I Focus on Creating <br></br><span>Meaningful</span> Experiences through <span>Development</span></h1>

{/* <Works addRef={ref} />

<About addRefabt={ref2} />

<Gallery /> */}

<Listingapi />

    </>
  )
}
