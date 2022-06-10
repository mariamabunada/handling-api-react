
//import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
 
  const [data, setData] = React.useState([]);
  
  const getData = async()=>{
   await fetch(`https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals`,{method:"GET"})
   .then((res) =>  res.json())
     .then((response) => console.log(response));
  }

  /*const [display,setDisplay]=React.useState([])

  const postData = async()=>{
    await fetch (`https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals`,{method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),})
  }*/

  React.useEffect(() => {
   getData()}, []);

   return (
     <div className='root'>
       <div className='container'>
         <div className='card'>
         <div className='juiceName'>{data.map((item)=>(<h1>{item.name}</h1>))}</div>
         <div className='juiceImage'>{data.map((item)=>(<img >{item.image}</img>))}</div>
         </div>
       </div>
       <form>
        
       </form>
     </div>
   )
  
}

export default App;
