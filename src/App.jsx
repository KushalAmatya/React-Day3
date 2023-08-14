import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/button.css'

function App() {
  const [text,settext]=useState('invite');
  

  return (
    <>
    
    {/* <button onClick={()=>{
      setcounter(counter+10)
      setcounter(n=>n+10)
    }}>Increse</button> */}

    <button className={text==='invite'?'btn-invited':'btn-removed'} onClick={()=>{
      {text==='remove'?settext('invite'):settext('remove')}
    
    }}>{text}</button>
     
    </>
  )
}

export default App
