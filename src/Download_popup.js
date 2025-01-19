import './Download_popup.css';
import close from './assets/close.png'
import download_pic from './assets/Downloads Folder.png'
function Download_popup(props) {
    function show_popup(){
        props.show_download_popup_func()
   }
    return (
    <>
    <div className='overlay'></div>
            <div className='popup_download_cont'>
              <img className='img_eula' src={close} onClick={show_popup}/>
              <img className='download_pic' src={download_pic}/>
              <div className='popup_text'>
            
              </div>
              
            </div>
    
    
    </>
  );
}

export default Download_popup;
