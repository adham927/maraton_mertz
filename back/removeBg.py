import requests
import sys

response = requests.post(
        'https://api.remove.bg/v1.0/removebg',
        files={'image_file': open('./uploaded_img/img.png', 'rb')},
        data={'size': 'auto'},
        headers={'X-Api-Key': 'S81aidZCwDCxGUkUjiZNHvQN'},
    )
if response.status_code == requests.codes.ok:
        with open('./no_bg_images/no_bg.png', 'wb') as out:
            out.write(response.content)
        
else:
        print("Error:", response.status_code, response.text)
 