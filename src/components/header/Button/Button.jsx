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
    )
}