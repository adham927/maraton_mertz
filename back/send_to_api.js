
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

module.exports = async function send_to_api(img_name_path, image_name){

const inputPath = img_name_path;
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

await axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'aosupRxuVnXWMSzFAfR8yQNw',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync("./no_bg_images/"+"no_bg_"+image_name, response.data);
})
.catch((error) => {
    return console.error('Request failed:', error);
});
}