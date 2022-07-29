import { useState, useEffect, Fragment } from 'react'
import './App.css'




function App() {

  const [data, setData] = useState('null');

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "context": {
        "city": "std:080",
        "action": "search",
        "bap_id": "ondc.paytm.com",
        "domain": "nic2004:52110",
        "bap_uri": "https://ondc.paytm.com/retail",
        "country": "IND",
        "timestamp": "2022-07-28T08:00:48.462Z",
        "message_id": "1658995248462",
        "core_version": "1.0.0",
        "transaction_id": "ce128f2e6c43-4af3-aa2f-ebb61161a9b4"
      },
      "message": {
        "intent": {
          "payment": {
            "@ondc/org/buyer_app_finder_fee_type": "percent",
            "@ondc/org/buyer_app_finder_fee_amount": 3
          },
          "fulfillment": {
            "type": "Delivery"
          }
        }
      }
    }
    )
  }

  const url = 'https://api.test.esamudaay.com/external/v1/ondc/retail/bpp/search';

  useEffect(() => {
    fetch(url, requestOptions)
      .then(async res => await res.json())
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
