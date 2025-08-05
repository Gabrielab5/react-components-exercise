import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    return (
        <div className ="spamalot-component">
            {Array.from({ length: 500 }).map((_, i) => (
                <Spam key={i}/>
            ))}   
        </div>
    )
}

export default Spamalot

