import "./Card.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useRef } from "react"
import { useState } from "react"
import { clickOnCardReducer } from "../../redux/AllReducers/clickOnCardReducer"
import { clickOnCard } from "../../redux/action"

export const Card = ({numerOnCard,index,heandelClickOnOpenCard,openCard}) => {
    const [countClick,setCountClick] = useState("false");
    const despatch =  useDispatch()
    const CardOpenRef = useRef();
    const CardCloseRef = useRef();
    const valueSizeMapCard = useSelector((state) => state.valueSize) //value 
    const valueCountClick = useSelector((state) => state.clickOnCardReducer.click)

    const styleOpenCard = () => {
        let selectorCard = CardOpenRef.current.style
        let selectorCardClose = CardCloseRef.current.style
        if(countClick == "false"){
            setCountClick("true")
            selectorCard.animationName= "openCardFront";
            selectorCardClose.animationName= "openCardBack";
        }
        if(countClick === "true"){
            setCountClick("false")
            selectorCard.animationName= "closeCardFront"; 
            selectorCardClose.animationName= "closeCardBack";
        }
    }

    const onClickOpen = () => {

    }
    const handleOnClick = (event) => {
        console.log("Open!")
        //styleOpenCard();

    }

    const handleOnClickClose = (event) => {
        console.log("Открыл карту и передал!")
       // styleOpenCard();
        despatch(clickOnCard())
        let selectorCard = CardOpenRef.current.style
        let selectorCardClose = CardCloseRef.current.style
        setCountClick("false")
        openCard(selectorCard,selectorCardClose)
        heandelClickOnOpenCard(numerOnCard,valueCountClick,selectorCard,selectorCardClose)
        
        
    }
    return (
        <div className={`cardMain`}>
            <div className="openCardDiv" onClick={handleOnClick} ref = {CardOpenRef}>
               <div className="divForHidden">{numerOnCard}</div> 
            </div>
            <div className="closeCardDiv" onClick={handleOnClickClose} ref = {CardCloseRef}>
            ♦♦♦
            ♦♦♦
            ♦♦♦
            </div>
        </div>

    )
}