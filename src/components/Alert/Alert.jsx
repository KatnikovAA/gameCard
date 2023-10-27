import { Button } from "../header/Button/Button"
import { RadioButton } from "../Radio/RadioButton"
import "./Alert.css"
import { Switch } from "../Switch/Switch"
export const Alert = ({mainText}) =>{
    return (
        <div className="Alert">
            <div className="headerAlert">{mainText}</div>
            <div className="sizeAlert">
                Select Size:
               <Switch className="switchDiv" textLabel={"6x6"} value={12} handleClickCheacked={handleClickCheacked} checked={checked} />
               <Switch className="switchDiv" textLabel={"10x10"} value={20} handleClickCheacked={handleClickCheacked} checked={checked}/>
               {
               // <RadioButton/>
               }
            </div>
            <div className="buttonAlert">
                <Button handleClickPlay={handleClickPlay}/>
            </div>
        </div>
    )
}