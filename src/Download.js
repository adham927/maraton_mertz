import './Download.css';
import new_icon from './assets/new.png'
import check from './assets/check.png'
import { useState } from 'react';
function Download(props) {

  function show_popup(){
     if(props.img_bg_no_bg!=''){
         props.show_download_popup_func()
     }
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
        <div className="download_btn" style={{color: props.img_bg_no_bg!='' ? '#03a9f4': 'gray', borderColor: props.img_bg_no_bg!='' ? '#03a9f4': 'gray'}} onClick={show_popup}>
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
