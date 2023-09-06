import React,{useState} from 'react';
const App6=()=>{
    const[t1,setT1]=useState([])
    const[text,setText]=useState('')
    const deleteTask=(taskName)=>{
        setT1(
                t1.filter((task)=>{
                    if(taskName!==task)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                })
        )
    }

    function handleTodolist()
    {
        setT1([...t1,text])
    }

    function handleChange(e)
    {
        setText(e.target.value)
    }

    return(
        <>
        <input type='text' onChange={handleChange}/>
        <button onClick={handleTodolist}>To Do</button>

        {
            t1.map((task)=>{
                return(
                    <>
                    <h1>{task}</h1>
                    <button onClick={()=>{deleteTask(task)}}>deleteTask</button>
                    </>
                )
            })
        }
        </>
    )

}
export default App6;
