import { useState } from "react"
import { useDispatch } from "react-redux"
import { pickSizeCardMap } from "../../redux/action"

export function Switch ({textLabel,value}) {
    
    const dispatch = useDispatch();

    return (
        <label className="switchDiv" onClick={()=> dispatch(pickSizeCardMap(value))}>
            <input name="gameMapSize" type="radio" value={value} defaultChecked/>
                {textLabel}
        </label>
    )
}