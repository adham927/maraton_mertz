const express = require('express');
const {spawn} = require('child_process');
const multer = require('multer');
const app = express();
const send_to_api = require('./send_to_api');
const fileupload = require('express-fileupload');
app.use(fileupload())
// const upload = multer({ dest: './uploaded_img' });
const cors = require('cors');
app.use(cors());

app.use(express.static('uploaded_img'));

app.post('/upload_img', function(req, res){

    let imageFile = req.files.fileImg;
    imageFile.mv(`${__dirname}/uploaded_img/${req.files.fileImg.name}`,err => {
       // console.log(res.json({ path: `${__dirname}/uploaded_img/${req.files.fileImg.name}`})) 
        if (err) {
            return res.status(500).send(err)
        }  
       
       
    })
    res.json({ filename: req.files.fileImg.name });
    
    // send_to_api(`${__dirname}/uploaded_img/${req.files.fileImg.name}`,req.files.fileImg.name)
    
    // const python = spawn('python', ['./removeBg.py',`${__dirname}/uploaded_img/${req.files.fileImg.name}`,req.files.fileImg.name]);
    // console.log('File uploaded:', req.files.fileImg.name); 
    // res.json({ path: `${__dirname}/no_bg_images/${req.files.fileImg.name}`});
})

console.log('server running');
app.listen(5000);