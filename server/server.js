const path = require('path');
const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use('/static', express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });



app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });