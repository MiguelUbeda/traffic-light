import React, {useState} from "react"

const Semáforo = () => {
    const[color, setColor] = useState(null);

    return(
    <>
    <div class="container top bg-dark d-grid justify-content-center"></div>
    <div class="container semáforo bg-dark d-grid justify-content-center">
        <div style={{boxShadow: color === "red" ? "0px 0px 4px 4px #d7de50" : 'none'}}class="red light bg-danger rounded-circle" onClick={()=> setColor("red")}></div>
        <div style={{boxShadow: color === "yellow" ? "0px 0px 5px 5px #d7de50" : 'none'}}class="yellow light bg-warning rounded-circle" onClick={()=> setColor("yellow")}></div>
        <div style={{boxShadow: color === "green" ? "0px 0px 5px 5px #d7de50" : 'none'}}class="green light bg-success rounded-circle" onClick={()=> setColor("green")}></div>
    </div>
    </>
    )
}

export default Semáforo;