import './Bg.css';
import close from './assets/close.png'
function Bg() {
  return (
    <div className="Bg_cont">
      <div className="header_title"> העלאת תמונה כדי להסיר את הרקע</div>
      <img className="close_img" src={close} alt="close"/>

      <div className="upload_btn">העלאת תמונה </div>
      <div className="content_div"></div>
    
    </div>
  );
}

export default Bg;
