import { useState, useEffect, Fragment } from 'react'
import './App.css'

import { Categories, Providers, Descriptor, Header } from './components';





function App() {


  const [bppCategories, setBppCategories] = useState([]);
  const [bppProviders, setBppProviders] = useState([]);
  const [bppDescriptor, setBppDescriptor] = useState([]);

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


        setBppCategories(data.message.catalog["bpp/categories"]);
        setBppProviders(data.message.catalog["bpp/providers"]);
        setBppDescriptor(data.message.catalog["bpp/descriptor"]);

      });

  }, [url]);


  return (
    <Fragment>

      <Header />
      <Descriptor bppDescriptor={bppDescriptor} />
      <Categories bppCategories={bppCategories} />
      <Providers bppProviders={bppProviders} />





    </Fragment>
  )
}

export default App
