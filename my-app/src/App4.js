import React,{useState} from 'react';
const App4=()=>{
    
    const[str,setStr]=useState('')
    const[hide,setHide]=useState(true)
    const[show,setShow]=useState(false)
    const[val,setval]=useState('Show')
    const handletext=()=>{
        if(hide===true)
        {
            setStr('React Js Component')
            setShow(true)
            setHide(false)
            setval('Hide')
        }
        if(show===true)
        {
            setStr('')
            setHide(true)
            setShow(false)
            setval('Show')
        }
    }

    return(<>
    <div>
        <h1>{str}</h1>
        <button onClick={handletext}>{val}</button>
    </div>
    </>)
}
export default App4;