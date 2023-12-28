import data from '/src/data.js'
import {useState} from "react";

const App = () => {
    const [people, setPeople] = useState(data)

  return (
      <div>
        {people.map((person) => {
          const {id, name,age,image} = person
            return (<div key={id}>
                    <h1>{name}</h1>
                    <h2>{age} years</h2>
                    <img src={image} style={{width:300}}/>
            </div>
            )
        })}
      </div>
  )
};
export default App;
