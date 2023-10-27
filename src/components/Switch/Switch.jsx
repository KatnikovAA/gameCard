import { useState } from "react"
import { useDispatch } from "react-redux"
import { pickSizeCardMap } from "../../redux/action"

export function Switch ({textLabel,value,handleClickCheacked,checked}) {
    //const [checked, setCheaced] = useState(false)
    const dispatch = useDispatch();

    const  onChange = (event) => {
        let newValue = !checked
        console.log("сработал onChange")
        handleClickCheacked(newValue)

    }
    const  onClick = (event) => {
        console.log(value)
        console.log("сработал onClick")
        dispatch(pickSizeCardMap(value))
    }
    return (
        <label className="switchDiv" onClick={onClick}>
            <input name="gameMapSize" type="radio" value={value} onChange= {onChange} onClick={onClick} /*checked={checked}*/ />
            {textLabel}
        </label>
    )
}