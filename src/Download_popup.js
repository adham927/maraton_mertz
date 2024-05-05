import './Download_popup.css';
import close from './assets/close.png'
import { useState } from 'react';
import not_robot from './assets/not_robot.png'
function Download_popup(props) {
    const [checkbox_state, setcheckbox_state] = useState(false)
    const [show_error_robot, setshow_error_robot] = useState(false)
    function close_popup(){
        props.show_download_popup_func()
     }

     function checkbox_checked(){
        setshow_error_robot(!show_error_robot)
        setcheckbox_state(!checkbox_state)
     }
     const image_name_path = props.img_bg_no_bg;
     const image_name = image_name_path.split('/');
     function download_img(){
        if(checkbox_state){

            fetch(image_name_path)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = image_name[3];
                    a.click();
                });
                //window.location.href = response.url;
        });
        }else{
            setshow_error_robot(!show_error_robot)
        }
       
     }

  return (
    <>
    <div className='overlay'>


   </div>
   <div className='download_popup_cont'>
        <img src={close} className='download_popup_close' onClick={close_popup} />
        <div className='download_popup_top_div'> </div>
        <div className='top_text_download_popup'>אישור להורדת תמונה</div>
        <div className='sub_title_download_popup'>להוריד את התמונה?</div>
        <div className='not_robot_cont'>
        <input type="checkbox" className='checkbox_popup' onChange={checkbox_checked}/>
        <div className='not_robot_text'>אני לא רובוט</div>
        <img src={not_robot}  className='not_robot_img'/>
        </div>
        {show_error_robot?
        <div className='error_div'>יש לסמן אני לא רובוט</div> : <></>
        }
        <div className='approve_btn_cont'>
             <button className='approve_btn' onClick={download_img}>אישור</button>
            <button className='cancel_btn' onClick={close_popup}>ביטול</button>
        </div>
   </div>
    </>
    
  );
}

export default Download_popup;
