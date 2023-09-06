import React,{useState} from 'react';
// import img1 from './P.jpg';
// import img2 from './R.jpeg';
const App5=()=>{
    //const arr=[img1,img2]
    // const[Pic,setPic]=useState(img1)
    // const changeImg=()=>{
    //     if(Pic===img1)
    //     {
    //         setPic(img2)
    //     }
    //     else
    //     {
    //         setPic(img1)
    //     }
    // }
    // return(<>
    // <div>
    //     <img src={Pic} alt='sorry'/>
    //     <button onClick={changeImg}>ChangeImg</button>
    // </div>
    // </>)

    const[name,setName]=useState('xyz')
    const[email,setEmail]=useState('123@gmail.com')

    const handleName=(e)=>
    {
        setName(e.target.value)
    }
    const handleEmail=(e)=>
    {
        setEmail(e.target.value)
    }

    return(<>
    <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <input type='text' value={name} onChange={handleName}/>
        <input type='email' value={email} onChange={handleEmail}/>
    </div>
    </>)
}
export default App5;