import { Button } from "../header/Button/Button"
import { RadioButton } from "../Radio/RadioButton"
import "./Menu.css"
import { Switch } from "../Switch/Switch"
export const Menu = ({handleClickPlay,text,textOnButton}) =>{
    return (
        <div className="menu">
            <div className="headerMenu">{text}</div>
            <div className="sizeMenu">
                Select Size:
                    <Switch className="switchDiv" textLabel={"6x6"} value={12} />
                    <Switch className="switchDiv" textLabel={"10x10"} value={20}/>
            </div>

            <div className="buttonMenu">
                <Button 
                    handleClick={handleClickPlay}
                    textOnButton={textOnButton}
                />
            </div>
        </div>
    )
}