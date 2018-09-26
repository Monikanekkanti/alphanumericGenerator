const express = require('express');
const app = express();
const router = require('./router');

app.use(router);
app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});