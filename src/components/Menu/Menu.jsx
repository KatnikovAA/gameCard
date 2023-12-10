import { Button } from "../header/Button/Button"
import { RadioButton } from "../Radio/RadioButton"
import "./Menu.css"
import { Switch } from "../Switch/Switch"
<<<<<<< HEAD
export const Menu = ({handleClickPlay,text,textOnButton}) =>{
=======
export const Menu = ({handleClickPlay,handleClickCheacked,checked,text,textOnButton}) =>{
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
    return (
        <div className="menu">
            <div className="headerMenu">{text}</div>
            <div className="sizeMenu">
                Select Size:
<<<<<<< HEAD
                    <Switch className="switchDiv" textLabel={"6x6"} value={12} />
                    <Switch className="switchDiv" textLabel={"10x10"} value={20}/>
            </div>

            <div className="buttonMenu">
                <Button 
                    handleClick={handleClickPlay}
                    textOnButton={textOnButton}
                />
=======
               <Switch className="switchDiv" textLabel={"6x6"} value={12} handleClickCheacked={handleClickCheacked} checked={checked} />
               <Switch className="switchDiv" textLabel={"10x10"} value={20} handleClickCheacked={handleClickCheacked} checked={checked}/>
               {
               // <RadioButton/>
               }
            </div>
            <div className="buttonMenu">
                <Button handleClick={handleClickPlay}textOnButton={textOnButton}/>
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
            </div>
        </div>
    )
}