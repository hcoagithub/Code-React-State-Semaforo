import React from "react";
import './style.css';
import { useState } from "react";

const TrafficLight= () =>{
const [destello, setDestello] = useState({detencion:"", precaucion: "", avanzar:""});

    return (

    <>
<div className="poste"></div>   

<div className="container">
    <div className="row">
        <div onClick= {()=>{setDestello({detencion: "brillo", precaucion: "", avanzar:""})}} className={`rojo ${destello.detencion}`}></div>
    </div>

<div className="row">
<div  onClick= {()=>{setDestello({detencion: "", precaucion: "brillo", avanzar:""})}} className={`amarillo ${destello.precaucion}`}></div>
</div>

<div className="row">

<div  onClick= {()=>{setDestello({detencion: "", precaucion: "", avanzar:"brillo"})}} className={`verde ${destello.avanzar}`}></div>
</div>


</div>



    </>
    )

}


export default TrafficLight;