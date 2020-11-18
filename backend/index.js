const express = require('express');
const HOST = '0.0.0.0';
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
app.use(bodyParser.json({limit: '50MB', extended: true}));

app.use('/api/todos', require('./endpoints/api/todos'));

app.get('/', (req, res) => {
    res.send('Hello');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Serving on port ' + PORT + ' ...');
});
