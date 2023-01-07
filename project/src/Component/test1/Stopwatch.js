import React, { useEffect, useState } from 'react'

 const Stopwatch = () => {
    const states ={
      STARTED :'start',
      STOPPED:'stop'
    }
    const[count ,setcount]= useState(120);
  
    const [state, setState] = useState(states.STOPPED)
  
    const secondsToDisplay = count % 60
    const minutesRemains = (count - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemains % 60
    let myInterval 
    useEffect(()=>{
      myInterval = setInterval(() => {
        if (count> 0) {
            setcount(count- 1);
        }
        if (count === 0) {
               minutesToDisplay (minutesToDisplay- 1);
                setcount(59);
         } 
    }, 1000)
    return ()=> {
        clearInterval(myInterval);
      };
    })   
    const onStart=()=>{
      setState(states.STARTED)
    }
    const onPause =()=>{
      setState(states.STOPPED)
      clearInterval(myInterval)

    }
    const onRestart =()=>{
         setState(states.STOPPED)
         setcount(120)

    }
    

  
  
  return (
    <>
    <div className='box'>
            <h1>stopWatch</h1>
            <div className='innerbox'>
              <h2>
               { minutesToDisplay<10? '0'+minutesToDisplay :minutesToDisplay}
                : {secondsToDisplay<10? '0'+secondsToDisplay :secondsToDisplay}
              </h2>
            </div>


            
            <button onClick={onStart}>start</button>
            <button onClick={onPause}>pause</button>
            <button onClick={onRestart}>Restart</button>
    </div>
    
    </>
  )
}
export default Stopwatch;
