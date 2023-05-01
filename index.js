const express = require('express'); //import Express.js module
const app = express();
const path = require('path'); 
app.use(express.static(path.join(__dirname)));


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})