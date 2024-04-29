import './Bg.css';
import close from './assets/close.png'
import Download from './Download'
import {useState} from "react"
import Disp_img from './Disp_img';
import bunner from './assets/banner.png';
import logo from './assets/logo.png';
import Download_popup from './Download_popup';

function Bg() {

  const [selected_tab, setselected_tab] = useState(true);
  const [show_eula, setShow_eula] = useState(false);
  const [show_download_popup, setShow_download_popup] = useState(false);
  function selected(e){
    if(e.target.innerHTML == 'הוסר רקע'){
      setselected_tab(true)
    }
    else{
      setselected_tab(false)
    }
    // setselected_tab(!selected_tab);
  }

  function show_popup_eula(){
    setShow_eula(!show_eula);
  }

  function show_download_popup_func(){
    setShow_download_popup(!show_download_popup);
  }

  return (
    <div>
      <div className="Bg_cont">
      <div className="header_title"> העלאת תמונה כדי להסיר את הרקע</div>
      <img className="close_img" src={close} alt="close"/>

      <div className="upload_btn">העלאת תמונה </div>
      <div className='upload_btn_text' >פורמטים נתמכים jpeg, png</div>
      <div className="content_div">
        <div className="content_left">
            <div className="tabs_cont">
                <div className={"tabs_text text_bg_no_bg " + (selected_tab==true ? 'border_bottom_selected' : '')} onClick={selected} >הוסר רקע</div>
                <div className={"tabs_text text_bg_orig " + (selected_tab!=true ? 'border_bottom_selected' : '')} onClick={selected}>מקורי</div>
            </div>
            <div className="content_left_middle">
               {selected_tab==true ? <Disp_img comp_type="no_bg_comp"></Disp_img> : <Disp_img comp_type="orig_comp"></Disp_img>}
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
                <Download show_download_popup_func={show_download_popup_func} title="תמונה חינם" desc="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 פיקסל" comp_side="top"></Download>
                <Download title="Pro" desc="תצוגה מלאה" btn_text="HD הורד" small_text="איכות הטובה ביותר עד 25 מגה פיקסל" comp_side="bottom"></Download>
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
            klcxvjkcvjj
            dfvdfvbdfvbdfvb
            fvfdvdfbvdf
            fvfdvdfbvdffdvfd
            fvdfvfdv
            svfsvfv
            dfvd dfvdbbgbgf
            nhncghmhnfbdfvfb
            bgnfgndfbgbdfbfdbgd
            bgnfgndfbgbdfbfdbgd 
          </div>
          
        </div>
      </> : <></>}

      {show_download_popup == true? <Download_popup show_download_popup_func={show_download_popup_func}></Download_popup>: <></>}

    </div>
    
    
  );
}

export default Bg;
