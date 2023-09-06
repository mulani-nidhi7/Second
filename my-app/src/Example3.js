const Example3=(props)=>{
return(
    props.info.map((val)=>{
        return(
        <div>
        <img src={val.pic} alt='sorry'/>
        <h1>{val.name}</h1>
        <h1>{val.age}</h1>
        </div>
        )
    })
)
}
export default Example3;