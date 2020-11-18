const express = require('express');
const HOST = '0.0.0.0';
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
app.use(bodyParser.json({limit: '50MB', extended: true}));

app.get('/', (req, res) => {
    res.send('Hello');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Serving on port ' + PORT + ' ...');
});
