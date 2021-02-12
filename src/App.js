import React,{useState} from 'react';
import './Randhir.css';

function App()
{

  const [myCar,ChangeMyCar] = useState("BMD");

  const ChangeInputValue = (event) =>
  {
      ChangeMyCar(event.target.value);
  }


  return (
   <div className="main_body">
     <h1> {myCar} </h1>
text
     <input
     type="text"
     onChange={ChangeInputValue}
     >
     </input>

number
     <input
     type="number"
     onChange={ChangeInputValue}
     >
     </input>    

email
     <input
     type="email"
     onChange={ChangeInputValue}
     >
     </input>   

password
     <input
     type="password"
     onChange={ChangeInputValue}
     >
     </input>     

date
     <input
     type="date"
     min="2021-02-02"
     max="2021-03-03"
     onChange={ChangeInputValue}
     >
     </input>    

time
     <input
     type="time"
     onChange={ChangeInputValue}
     >
     </input>    

checkbox
     <input
     type="checkbox"
     value="Male"
     onChange={ChangeInputValue}
     >
     </input>10th

     <input
     type="checkbox"
     value="Male"
     onChange={ChangeInputValue}
     >
     </input>12th  

radio
     <input
     type="radio"
     value="Male"
     name="MyGender"
     onChange={ChangeInputValue}
     >
     </input>Male

     <input
     type="radio"
     value="Female"
     name="MyGender"
     onChange={ChangeInputValue}
     >
     </input>Female  

select
     <h1> Select City : {myCar} </h1>

     <select onChange={ChangeInputValue}>
     <option>Pune</option>
     <option>Mumbai</option>
     <option>Nashik</option>
     </select>

   </div>
  );
}

export default App;
