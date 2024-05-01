const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());

app.use(express.static('no_bg_images'));
app.use(express.static('uploaded_img'));

const fileupload = require('express-fileupload');
app.use(fileupload());

const send_to_api = require('./send_to_api');

app.post('/upload_img', function (req, res){

    const d = new Date();
    let time = d.getTime();

    let imageFile = req.files.fileImg;
    let image =`${__dirname}/uploaded_img/${time}${req.files.fileImg.name}`
    imageFile.mv(image, async err => {
        if (err) {
         return res.status(500).send(err);
        }

        

        await send_to_api(image, time+req.files.fileImg.name);
        res.send(`${time}${req.files.fileImg.name}`);
      });
    })


console.log('server running')
app.listen(5000);