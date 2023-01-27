import React from "react";
import "./card.style.css"
export function Card(props){
    return<div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`}></img>
       <h1>{props.monster.name}</h1> 
       <p>{props.monster.email}</p>
    </div>
}