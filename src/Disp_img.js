import './Disp_img.css';
import {useState, useRef} from "react"
import img_bg from './assets/img.png'
function Disp_img(props) {
    const inputElement = useRef();
    const [color, setcolor] = useState('')
    function save_color(e){
       setcolor(e.target.value) 
       props.setchoose_color_func(e.target.value);
    }

    const focusInput = () => {
        inputElement.current.click();
    };
    return (
        <div>
           
            <div className='disp_img_cont'>
            {props.comp_type=='no_bg_comp'? 
            <>
                <div className='top_text'>אל תשכח להוריד את הקבצים שלך, הם ימחקו אוטומטיתכשתצא מהדף</div>
                <input className='color-input' type='color' ref={inputElement} onChange={save_color} />
                <button className='color-btn' onClick={focusInput} ><span>צבע רקע</span> <span className='color-choose' style={{backgroundColor:color}}></span> </button>
                
               </>
                : <></>}
            </div>
            {props.img_bg!= '' ?
             <div>
             <img src={props.img_bg} className='img_bg'/>
            </div> 
            : <></>}

            
           
        </div>
    );
}
export default Disp_img;