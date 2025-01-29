const express = require('express');
const {spawn} = require('child_process');
const multer = require('multer');
const path = require('path');
const app = express();
const send_to_api = require('./send_to_api');
const fileupload = require('express-fileupload');
app.use(fileupload())
// const upload = multer({ dest: './uploaded_img' });
const cors = require('cors');
app.use(cors());
const fs = require('fs');
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

    app.get('/download/:filename', (req, res) => {
        const { filename } = req.params; // Get the file name from the URL
        const filePath = path.join(__dirname, 'uploaded_img', filename);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'File not found' });
          }
      
        res.download(filePath, (err) => {
          if (err) {
            console.error('Error while downloading the file:', err);
            res.status(500).send('Error downloading file.');
          }
        });
      });
    
    // send_to_api(`${__dirname}/uploaded_img/${req.files.fileImg.name}`,req.files.fileImg.name)
    
    // const python = spawn('python', ['./removeBg.py',`${__dirname}/uploaded_img/${req.files.fileImg.name}`,req.files.fileImg.name]);
    // console.log('File uploaded:', req.files.fileImg.name); 
    // res.json({ path: `${__dirname}/no_bg_images/${req.files.fileImg.name}`});
})

console.log('server running');
app.listen(5000);