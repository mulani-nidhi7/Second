import React,{useState} from "react";
//import {BroswerRouter as Router,Routes,Route,Link} from "react-router-dom";
// import Home from "./Home";
// import Shop from "./Shop";
//import Example3 from "./Example3";
//const car={name:'abc',model:'xyz'};
// const arr=['namannn','cookiee']
// import img1 from './P.jpg';
// import img2 from './R.jpeg';
//import img3 from './q.jpg'
const App3=()=>{
    //console.log(img1)

        // const arr=[1,2,3,4,5,6];
        // const new_arr= arr.filter((val)=>
        // {
        //     if(val==3)
        //     {
        //         return false;
        //     }
        //     else
        //     {
        //         return true;
        //     }

        // })
        // return(<>
        // {
        //     new_arr.map((val)=>{
        //         return(<><h1>{val}</h1></>)
        //     })
        // }
        // </>)
    
        // const info={name:['abc','xyz'],rollno:[201,202],t1_marks:[20,22],t2_marks:[23,25]}
    //    const color='red'
    //    const bc='yellow'
    //    const fs=25
    //    const fst='italic'
    // const stylearr={color:'red',bc:'yellow',fs:25,fst:'italic'}
    //    return(<>
    //    <Example3 info={stylearr}/>
    //    </>)



    // const arr=[{pic: img1,name:'namann',age:20},{pic: img2,name:'nidhii',age:19}]
    // const newarr=arr.filter((val)=>{
    //     if(val.age<40)
    //     {
    //         return true;
    //     }
    //     else
    //     {
    //         return false;
    //     }
    // })
    // return(
    //     <>
    //     {
    //         newarr.map((val)=>{
    //             return(<><h1>{val.name}:{val.age}</h1></>)
    //         })
    //     }
    //     </>
    // )


    // return(<>
    // <Example3 info={arr}/>
    // </>)

    // }
        
    const[color,setColor]=useState('green');
    const[font,setFont]=useState(20);
    
    function changeColor()
    {
        setColor('blue');
    }
    function changeFont()
    {
        setFont(50);
    }

    return(
        <>
        <div>
            <h1 style={{color:color,fontSize:font}}>LJ University</h1>
            <button onClick={changeColor}>ChangeColor</button>
            <button onClick={changeFont} >ChangeFont</button>
        </div>
        </>
    )
}
export default App3;