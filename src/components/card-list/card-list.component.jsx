import React from "react";
import './card-list.style.css'
import { Card } from "../card/car.component";
export function CardList(props){
    return <div className="card-list">
     {
              props.monster.map(x=><Card key={x.id} monster={x}/>)
            }
    </div>
}