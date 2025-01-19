import './Download.css';
import new_icon from './assets/new.png'
import check from './assets/check.png'
function Download(props) {
     function show_popup(){
          props.show_download_popup_func()
     }
  return (
    <div className={"download_cont " + (props.comp_side ? 'border_comp_top' : '')}>
        <div className="download_title">
             {props.title} 
             {props.comp_side == 'bottom' ? 
             <img  src={new_icon} className="new_icon"/> : "" 
            }
               
        </div>
        <div className="download_desc">
             {props.desc}  
        </div>
        <div className="download_btn" onClick={show_popup}>
             {props.btn_text}  
        </div>
        <div className="small_texxt_download">
             {props.small_text} 
             <img src={check} className="check_icon"/> 
        </div>
    </div>
  );
}

export default Download;
