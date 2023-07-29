import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [userName,setUserName] = useState('');
  useEffect(()=>{
    getNames();
  },[])
  const getNames = async() =>{
    const response = await axios.get('names');
    setUserName(response.data.message)
  }
  return (
    <div className="App">
      <h1>hello front end i am working here.. for dipak paudel</h1>
      <h3>got from backend {userName}</h3>
    </div>
  );
}

export default App;
