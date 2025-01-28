import './Disp_img.css';
import { useRef } from 'react';

function Disp_img(props) {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.click();
    };
    return (
        <div>
           
            <div className='disp_img_cont'>
            {props.comp_type==='no_bg_comp'? 
            <>
                <div className='top_text'>אל תשכח להוריד את הקבצים שלך, הם ימחקו אוטומטיתכשתצא מהדף</div>
                <input className='color-input' onChange={props.color_selected} type='color' ref={inputElement} />
                <button className='color-btn' onClick={focusInput}>צבע רקע</button>
                <div className='color_selected'>
                    
                </div>
               </>
                : 
                <div>
                    <img src={props.img_src_no_bg} className='img_bg'/>
                </div>
                }
            </div>
             {/* <div>
             <img src={props.img_src} className='img_bg'></img>
            </div> */}
            
           
        </div>
    );
}
export default Disp_img;