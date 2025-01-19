const express = require('express');
const app = express();

const fileupload = require('express-fileupload');
app.use(fileupload())

const cors = require('cors');
app.use(cors());

app.post('/upload_img', function(req, res){
    let imageFile.mv(`${__dirname}/uploaded_img/${req.files.fileImg.name}`,err => {
        if (err) {
            return res.status(500).send(err)
        }

    })
})
jQzn4MLx1oRtt4UxCFQZzQ3r
console.log('server running');
app.listen(5000);