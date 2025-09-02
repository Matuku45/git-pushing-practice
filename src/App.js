
import {useState} from 'react';



 



 function App(){

  const [name, setName] = useState();
  const cars = ['Ford', 'Chevy', 'Honda'];

    function handlesubmit(e){
      e.preventDefault();
      alert(`You are submitting ${name}`);
    }

    return( <div> 
     <form>
       <label for="name">Enter your name: </label>
        <input 
        type='text'
        id='name'
        value={name}
        ///event lamda
        onChange={(e) => setName(e.target.value)}
        autoComplete='on'
        />
         <button type='submit' onClick={handlesubmit}>Submit</button>       
      <p>Current value {name}</p>
     </form>

  <h1>
My Cars 

<ul>
  {cars.map((car, index) => (
    <li key={index}>{car}</li>
  ))}

</ul>

  </h1>
 



    </div>);
}

export default App;

