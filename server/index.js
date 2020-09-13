const express = require('express');
const chalk = require('chalk'); // https://www.npmjs.com/package/chalk
const app = express();
const PORT = 7777

app.get('/', (req, res) => {
    res.send('sending from default route');
});
app.listen(PORT, () => {
    console.log(chalk.black.bgGreen.bold(`running on port ${PORT}`));

})