import data from '/src/data.js'
import {useState} from "react";
import List from "./Components/List.jsx";

const App = () => {
    const [people, setPeople] = useState(data)
   return (
       <main>
           <section className="container">
               <h3>{people.length} birthdays todayys</h3>
                <List people={people}/>
                <button type='button' className=' btn btn-block' onClick={() => setPeople([])}>Clear List</button>
           </section>
       </main>
   )
};
export default App;
