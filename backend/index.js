const express = require('express');
const app = express();

const backendPort = process.env.BACKEND_POST;


app.listen(30, () => {
    console.log('Server runs perfectrly.');
})