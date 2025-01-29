import './Download_popup.css';
import close from './assets/close.png'
import download_pic from './assets/Downloads Folder.png'
import not_robot from './assets/not_robot.png'

function Download_popup(props) {

  
    function show_popup(){
      debugger;
        props.show_download_popup_func()
   }

   function handleDownload(){
    debugger;
    props.handleFileDownload()
   }
 
   

    return (
    <>
    <div className='overlay'></div>
           
            <div className='popup_download_cont'>
            <div >
                 <img className='download_pic'  src={download_pic}/>
            </div>
              <img className='img_eula' src={close} onClick={show_popup}/>
            
              <div className='popup_title'>
                אישור להורדת תמונה
              </div>
              <div className='popup_subtitle'>
                האם להוריד את התמונה?
              </div>
              <div className='not-robot'>
                <input type='checkbox' onChange={props.checkbox_clicked} className='not-robot-checkbox'/>
                <div className='not-robot-text'>
                    אני לא רובוט
                </div>
                <img className='not-robot-img' src={not_robot}/>
              </div>
              <div className='approve-cancle'>
                <button className='approve-btn' onClick={handleDownload}>אישור</button>
                <button className='cancle-btn' onClick={show_popup}>ביטול</button>
              </div>
              
            </div>
    
    
    </>
  );
}

export default Download_popup;
