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

  const url = 'https://b913-2405-204-5207-ff18-9071-a6a7-87ee-7b03.in.ngrok.io/search';

  useEffect(() => {
    fetch(url + "?wait=true", requestOptions)
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
