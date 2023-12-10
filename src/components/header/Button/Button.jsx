<<<<<<< HEAD
import "./Button.css"
import { clickPlayButton } from "../../../redux/action"
import { useDispatch } from "react-redux"

export const Button = ({handleClick,textOnButton}) =>{
    const dispatch = useDispatch()

    const clickButton = () =>{
        dispatch(clickPlayButton())
        handleClick()
    }

    return (
        <button className="button" onClick={clickButton}>{textOnButton}</button>
=======
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
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
    )
}