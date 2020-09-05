const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();

//set static path
app.use(express.static(path.join(__dirname,"client")));


app.use(bodyParser.json());

//VAPID Key
const publicVapidKey = "<Your public key>";
const privateVapidKey = "Your private key";

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//Subscibe Route
app.post('/subscribe', (req, res) => {
    //Get pushSubscription objeect
    const subscription = req.body;
    //send 201 -resource created
    res.status(201).json({});

    //create payload
    const payload = JSON.stringify({ title: 'Push Test'});

    //Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.log(err));

});

app.listen(process.env.PORT || 3000, () => console.log(`Server running...`))