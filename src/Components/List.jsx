import data from '/src/data.js'
import {useState} from "react";
import Person from "./Person.jsx";
import person from "./Person.jsx";

const List = ({people}) => {
    return (
        <section>
            {people.map((person) => {
                return <Person key={person.id} {...person}/>
            })}
        </section>
    );
};

export default List