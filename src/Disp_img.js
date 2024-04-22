import './Disp_img.css';
import {useState, useRef} from "react"
import img_bg from './assets/img.png'
function Disp_img(props) {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.click();
    };
    return (
        <div>
           
            <div className='disp_img_cont'>
            {props.comp_type=='no_bg_comp'? 
            <>
                <div className='top_text'>אל תשכח להוריד את הקבצים שלך, הם ימחקו אוטומטיתכשתצא מהדף</div>
                <input className='color-input' type='color' ref={inputElement} />
                <button className='color-btn' onClick={focusInput}>צבע רקע</button>
               </>
                : <></>}
            </div>
             <div>
             <img src={img_bg} className='img_bg'/>
            </div>
            
           
        </div>
    );
}
export default Disp_img;