import { useDispatch, useSelector } from "react-redux"; 

import "./Button.css"
export const Button = ({handleClick,textOnButton}) =>{
    const dispatch = useDispatch();
    const onClick = () =>{
        if(typeof handleClick ==="function"){
            handleClick()
        }
    }
    return (
        <button className="button" onClick={onClick}>{textOnButton}</button>

    )
}