
import {useState} from "react";

const Person = ({image,name,age}) => {
    return (
        <article className="person">
        <img src={image} alt={name} className='img'/>
            <div>
                <p>{age} years</p>
            </div>
        </article> )
        }

export default  Person