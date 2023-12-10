import { Header } from "./components/header/Header";
import "./App.css"
import { Menu } from "./components/Menu/Menu";
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux'
import store from "./redux/store";
import { useEffect, useState} from "react";
import { Card } from "./components/Card/Card";
import { easyMod,hardMod } from "./const";
import { useDispatch } from "react-redux";
import { secondNumberCard } from "./redux/action";
import { firstNumberCard } from "./redux/action";
import { cancelCountCard } from "./redux/action";
import { countForWin } from "./redux/action";
import { modeWinGame } from "./redux/action";
import { clickPlayButton } from "./redux/action";


function App() {
  const [flagPlay,setFlagPlay] = useState(false)
  const [countClickCard,setCountClickCard] = useState("0")
  const [firstOpenCard,setFirstOpenCard] = useState(1)
  const [secondOpenCard,setSecondOpenCard] = useState(2)
  const [gameMod,setGameMod] = useState([])
  const [arrCard,setArrCard] = useState()
  const [winGame,setWinGame] = useState(false)
  const despatch =  useDispatch()
  const valuePlayButton = useSelector((state) => state.booleanPlay.boolean) //true or false флаг старта игры
  const valueSizeMapCard = useSelector((state) => state.sizeMapCard.size) //числа - количество карт на доске
  const valueCountClick = useSelector((state) => state.clickOnCardReducer.click) //
  const valueSecondNumberCard = useSelector((state) => state.secondNumberCardReducer.valueNumber) //числа - количество карт на доске
  const valueFirstNumberCard = useSelector((state) => state.firstNumberCardReducer.value) //числа - количество карт на доске
  const valueCountForWin = useSelector((state) => state.countForWinReducer.countWin) //числа - количество карт на доске

 let coupleValue = [];
 let coupleRefCard = [];
 let coupleAtt = [];
 let newGage = false;

  const heandelClickOnOpenCard = (numerOnCard,countClick,selectorCard,selectorCardClose) =>{ // прокидываю valueCountClick через аргумент при вызове функции т.к из функции он не получает
    if(countClick == 1)
    {
      despatch(firstNumberCard(numerOnCard))
      setFirstOpenCard(numerOnCard)
      coupleValue.push(numerOnCard)
      coupleRefCard.push(selectorCard,selectorCardClose)
      console.log(coupleRefCard)
    }

    if(countClick == 2)
    {
      despatch(secondNumberCard(numerOnCard))
      setSecondOpenCard(numerOnCard)
      coupleValue.push(numerOnCard)
      coupleRefCard.push(selectorCard,selectorCardClose)

    }
    if(countClick == 2)
    {
      let a = coupleValue[0];
      let b = coupleValue[1];
      cheakTwoCard(a,b);
    }
  }

  const cheakTwoCard = (a,b) =>{

    if(a === b)
    {
      coupleAtt.push(1,1)
      coupleValue.length = 0;
      coupleRefCard.length = 0;
      despatch(cancelCountCard())
      despatch(countForWin())
      if(coupleAtt.length === valueSizeMapCard)
      {
        setWinGame(true)
      }
    }
    else {
      despatch(cancelCountCard()) 
      let coupleRefCardCopy = coupleRefCard.slice()
      coupleValue.length = 0;
      coupleRefCard.length = 0;
      setTimeout(() => {
        coupleRefCardCopy[0].animationName= "closeCardFront"; 
        coupleRefCardCopy[1].animationName= "closeCardBack";
        coupleRefCardCopy[2].animationName= "closeCardFront"; 
        coupleRefCardCopy[3].animationName= "closeCardBack";
        coupleRefCardCopy.length = 0;
    }, 700);
    }
  } 

  const openCard = (selectorCard,selectorCardClose) => {
        selectorCard.animationName= "openCardFront";
        selectorCardClose.animationName= "openCardBack";

}
  const handleClickPlay = () => {
    //despatch(clickPlayButton())
    pickModGame();
  }
  

  const handleClickPlayAgain = () => {
    setWinGame(false)
    despatch(clickPlayButton())
    pickModGame();
  }
  
  const pickModGame = () =>{
    let arrNumberForMod = [] 
    if(valueSizeMapCard == 12){
      arrNumberForMod = shuffle(easyMod)
      setGameMod(arrNumberForMod);
      setArrCard(listAllCard(arrNumberForMod))
    }
    else{
      arrNumberForMod = shuffle(hardMod)
      setGameMod(arrNumberForMod);
      setArrCard(listAllCard(arrNumberForMod))
    }
  }
  const listAllCard = (arrNumberForMod) => {
    let newArr = arrNumberForMod.map((num,index) =>
    <Card 
      key={index.toString()} 
      numerOnCard={num} 
      index={index} 
      heandelClickOnOpenCard={heandelClickOnOpenCard} 
      openCard={openCard}>
    </Card>
    );
    return newArr;
  }

  const shuffle = (array) => {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  return (
    <div className="mainDiv">  
        <Header/>
          { !valuePlayButton 
          && 
          <Menu 
            handleClickPlay={handleClickPlay} 
            text={"Welcome to the game Card on React!"}
            textOnButton={"Play"}/>
          }
          {
          (valuePlayButton && !winGame) 
          &&         
            <div className="cardMapDesk">{arrCard}</div>
          }

          {winGame 
          &&
          <Menu 
            handleClickPlay={handleClickPlayAgain} 
            text={"You WIN !!!!"} 
            textOnButton={"Play Again"} />
          }
        
    </div>
  );
}

export default App;
