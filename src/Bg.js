import './Bg.css';
import close from './assets/close.png'
import Download from './Download'
import {useState, useRef} from "react"
import Disp_img from './Disp_img';
import bunner from './assets/banner.png';
import logo from './assets/logo.png';
import Download_popup from './Download_popup';
import axios from 'axios';

function Bg() {

  const [selected_tab, setselected_tab] = useState(true);
  const [show_eula, setShow_eula] = useState(false);
  const [show_download_popup, setShow_download_popup] = useState(false);
  const [show_error, setShow_error] = useState(false);
  const [no_bg_img, setno_bg_img] = useState();
  const [bg_img, setbg_img] = useState();
  const [selectedColor, setSelectedColor] = useState('');
  const [checkboxClicked, setcheckboxClicked] = useState(false);
  const [no_img, setno_img] = useState(false);
  


const inputElement = useRef();

const focusInput = () => {
  inputElement.current.click();
}

function checkbox_clicked(){
  setcheckboxClicked(!checkboxClicked)
}

  function selected(){
    setselected_tab(!selected_tab);
  }

  function show_popup_eula(){
    setShow_eula(!show_eula);
  }
  function show_download_popup_func(){
    if (bg_img) {
      setShow_download_popup(!show_download_popup);
      setcheckboxClicked(false)
    }
    else{
      setno_img(!no_img)
    }
    
  }


  const handleFileDownload = async () => {
    
     if(checkboxClicked){
      if (!bg_img) {
        console.error('No file name available for download');
        return;
      }
    
      console.log('Downloading file:', bg_img);
  
      try {
        const response = await axios.get(`${bg_img}`, {
          responseType: 'blob', // Get the file as a blob
        });
  
        // Create a URL for the file and trigger download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
  
        var str = bg_img;
        var n = str.lastIndexOf('/');
        var result = str.substring(n + 1);
  
        // Use the same unique file name from the server
        link.setAttribute('download', result);
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading file:', error);
      }
      setShow_download_popup(!show_download_popup);
      setcheckboxClicked(!checkboxClicked)
    }
}


    
const color_selected = async (e) => {
  setSelectedColor(e.target.value)
  document.documentElement.style.setProperty('--selected-bg-color', e.target.value);
}



const upload_file = async (e) => {
  const formData = new FormData();
  formData.append('fileImg', e.target.files[0]); // Upload file
       if(( e.target.files[0].type === 'image/png' ||  e.target.files[0].type === 'image/jpeg') &&  e.target.files[0].size <= 10000000){
        setShow_error(false)
        try {
          const response = await axios.post('http://localhost:5000/upload_img', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          
          console.log('Response from server:', response.data); // Log server response
          setbg_img('http://localhost:5000/'+response.data.filename);
          setno_img(!no_img)
        } catch (error) {
          console.error('Error uploading file:', error);
        }
       }
       else{
           setShow_error(true)
         }
  }
  return (
    <div>
      <div className="Bg_cont">
      <div className="header_title"> העלאת תמונה כדי להסיר את הרקע</div>
      <img className="close_img" src={close} alt="close"/>

      <div className="upload_btn" onClick={focusInput}>העלאת תמונה </div>
      {show_error ? <div className='file_type_error'>פורמט לא נתמך</div>: <></>}
      <input type='file' onChange={upload_file} ref={inputElement} className='upload_input'/>
      <div className="content_div">
        <div className="content_left">
            <div className="tabs_cont">
                <div className={"tabs_text text_bg_no_bg " + (selected_tab===true ? 'border_bottom_selected' : '')} onClick={selected} >הוסר רקע</div>
                <div className={"tabs_text text_bg_orig " + (selected_tab!==true ? 'border_bottom_selected' : '')} onClick={selected}>מקורי</div>
            </div>
            <div className="content_left_middle">
               {selected_tab==true ? <Disp_img color_selected={color_selected} comp_type="no_bg_comp" img_src={no_bg_img}></Disp_img> : <Disp_img comp_type="orig_comp" img_src_no_bg={bg_img}></Disp_img>}
            </div>

            <div className="footer_left_content">
              <div className='footer_text'>
                על ידי העלאת תמונה אתה מסכים לתנאים ולההגבלות
                אתר זה מוגן וחלים בו מדניות ופרטיות ותנאי השירות
              </div>
                  <button className='button_footer' onClick={show_popup_eula}>תקנון החברה</button>
            </div>
        </div>
        <div className="content_right">
            <div className="content_right_middle">
                <Download show_download_popup_func={show_download_popup_func} title="תמונה חינם" desc="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 פיקסל" comp_side="top" no_img={no_img}></Download>
                <Download show_download_popup_func={show_download_popup_func} title="Pro" desc="תצוגה מלאה" btn_text="HD הורד" small_text="איכות הטובה ביותר עד 25 מגה פיקסל" comp_side="bottom"></Download>
            </div>
        </div>
      </div>

      <div className='footer'>
        <img src={bunner} className='banner_img'/>
        <img src={logo} className='logo_img'/>
      </div>

    </div>

    {show_eula == true? <>
        <div className='overlay'></div>
        <div className='popup_eula'>
          <img className='img_eula' src={close} onClick={show_popup_eula} />
          <div className='popup_text'>
            
          </div>
          
        </div>
      </> : <></>}
      {show_download_popup == true?
      <Download_popup show_download_popup_func={show_download_popup_func} handleFileDownload={handleFileDownload} checkbox_clicked={checkbox_clicked} checkboxClicked={checkboxClicked} ></Download_popup>: <></>
      }
    </div>
    
    
  );
}

export default Bg;
