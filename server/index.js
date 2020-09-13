const express = require('express');
const app = express();
const PORT = 7777

app.get('/', (req, res) => {
    res.send('sending from default route');
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})