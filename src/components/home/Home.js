import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
const [count,setCount] = useState(0);
const[gv1, setGv1] = useState(0)
const[gv2, setGv2] = useState(0)
const[gv3, setGv3] = useState(0)
const[perimeter, setPerimeter] = useState(0)
const[area, setArea] = useState(0)

const handleChange = (e, setter ) => {
const value = parseInt(e.target.value);
setter(value);
}

const isTriangle = () => {
  return gv1 + gv2 > gv3 && gv1 + gv3 > gv2 && gv2 +gv3 > gv1
}

const triangleAreaAndPerimeter = () =>{
  if(isTriangle()){
    setPerimeter(gv1 + gv2 + gv3)
    const s = perimeter / 2;
    const a = Math.sqrt(s* ( s - gv1) * (s - gv2 ) * (s - gv3));
    setArea(a);

  }
  else{
    setArea(0);
  }
}

const increment = () =>{
    setCount(count + 1 )
}

  const decrement = () =>{
    setCount ( count - 1 );
  }
  return (
    <div className='Linker'>{count}
    <button onClick={increment}>Increment</button>
  <button onClick={decrement}>Decrement</button>
    <p>count is : {count}</p>

    <input type='number' value={gv1} onChange={(e) => handleChange (e,setGv1)}/><br />
    <input type='number' value={gv2} onChange={(e) => handleChange (e,setGv2)}/><br />
    <input type='number' value={gv3} onChange={(e) => handleChange (e,setGv3)}/><br />
    <button onClick={triangleAreaAndPerimeter}>OK</button>
    <p>{area} : {perimeter}</p>
    </div>
  )
}
