const express = require('express');
const app = express();
const port = 4000;

app.get('/api', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Express server is running at http://localhost:${port}`);
});
