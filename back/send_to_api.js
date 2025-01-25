var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
 module.exports =  function send_to_api(img_path,img_name){
    var data = new FormData();
    data.append('image_file', fs.createReadStream(img_path));
    
    var config = {
      method: 'post',
      url: 'https://api.removal.ai/3.0/remove',
      headers: { 
        'Rm-Token': '4341F210-A014-3DAB-14F2-E91E4586951D', 
        ...data.getHeaders()
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
        fs.writeFileSync("./no_bg_images/"+"no_bg_"+img_name, response.data)
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
