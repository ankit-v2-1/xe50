import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'cross-fetch';
import crypto from 'crypto';
var cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
}));



var transaction_id = crypto.randomBytes(16).toString("hex");
var message_id = crypto.randomBytes(16).toString("hex");


const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "context": {
            "city": "std:080",
            "action": "search",
            "bap_id": "https://b913-2405-204-5207-ff18-9071-a6a7-87ee-7b03.in.ngrok.io/",
            "domain": "nic2004:52110",
            "bap_uri": "https://b913-2405-204-5207-ff18-9071-a6a7-87ee-7b03.in.ngrok.io/callback",
            "country": "IND",
            "timestamp": "2022-07-28T08:00:48.462Z",
            "message_id": message_id,
            "core_version": "1.0.0",
            "transaction_id": transaction_id
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


fetch(url + "?wait=true", requestOptions)
    .then(res => res.json())
    .then(data => {
        console.log(data);

    });


var callbackData: string;


app.post('/callback/on_search', (req, res) => {
    console.log(req.body.message);
    callbackData = req.body;
});



app.get('/search', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(callbackData);
})



app.listen(3000, () => {
    console.log('Bap listening on port 3000!');
});