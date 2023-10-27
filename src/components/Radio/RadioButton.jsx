import "./RadioButton.css"
import { pickSizeCardMap } from "../../redux/action";
import { Dispatch } from "redux";
import { useSelector,useDispatch } from "react-redux";

export const RadioButton = ({valueRadio,text}) =>{

    const dispatch = useDispatch();

    const handleCliclCheckbox = (event) =>{
        let value = event.target.value;
        dispatch(pickSizeCardMap(value))
        console.log(value)  
    }

    return (
    <div className="sizeMenuPoint">
        <label>
            <input type="checkbox" checked={false} value={valueRadio} onClick={handleCliclCheckbox} />
            {text}
        </label>
       { 
        //<label>             <input type="checkbox" checked={false} value='24' onClick={handleCliclCheckbox} />             12х12        </label>
        }
    </div>
    )
}