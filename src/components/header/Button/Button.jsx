import { useDispatch, useSelector } from "react-redux"; 
import { clickPlayButton } from "../../../redux/action";
import "./Button.css"
export const Button = ({handleClick,textOnButton}) =>{
   //const valuePlayButton = useSelector((state) => state.boolean) //value 
    const dispatch = useDispatch();
    const onClick = () =>{
        //dispatch(clickPlayButton())
        if(typeof handleClick ==="function"){
            handleClick()
        }
    }
    return (
        <button className="button" onClick={onClick}>{textOnButton}</button>
    )
}