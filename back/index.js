const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());

const fileupload = require('express-fileupload');
app.use(fileupload());

app.post('/upload_img', function (req, res){
    console.log(req.files);
})

console.log('server running')
app.listen(5000);