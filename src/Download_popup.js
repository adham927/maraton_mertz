import './Download_popup.css';
import close from './assets/close.png'
import not_robot from './assets/not_robot.png'
function Download_popup(props) {

    function close_popup(){
        props.show_download_popup_func()
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
        <input type="checkbox" className='checkbox_popup'/>
        <div className='not_robot_text'>אני לא רובוט</div>
        <img src={not_robot}  className='not_robot_img'/>
        </div>
        <div className='approve_btn_cont'>
             <button className='approve_btn'>אישור</button>
            <button className='cancel_btn'>ביטול</button>
        </div>
   </div>
    </>
    
  );
}

export default Download_popup;
