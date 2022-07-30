import { useState, useEffect, Fragment } from 'react'
import './App.css'




function App() {

  const [data, setData] = useState('null');

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const url = 'http://localhost:3000/search';

  useEffect(() => {
    fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      });

  }, [url]);


  return (
    <Fragment>
      <h1>Hello, world!</h1>
      {JSON.stringify(data)}
    </Fragment>
  )
}

export default App
