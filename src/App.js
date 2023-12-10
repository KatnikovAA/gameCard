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
<<<<<<< HEAD
=======
  const [cheackedSwitch,setCheackedSwitch] = useState(true)
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
  const valuePlayButton = useSelector((state) => state.booleanPlay.boolean) //true or false флаг старта игры
  const valueSizeMapCard = useSelector((state) => state.sizeMapCard.size) //числа - количество карт на доске
  const valueCountClick = useSelector((state) => state.clickOnCardReducer.click) //
  const valueSecondNumberCard = useSelector((state) => state.secondNumberCardReducer.valueNumber) //числа - количество карт на доске
  const valueFirstNumberCard = useSelector((state) => state.firstNumberCardReducer.value) //числа - количество карт на доске
  const valueCountForWin = useSelector((state) => state.countForWinReducer.countWin) //числа - количество карт на доске

<<<<<<< HEAD
=======
  useEffect(() => {    
        // Изменяем заголовок html-страницы   

      },
    [winGame]);

    useEffect(() => {    
      // Изменяем заголовок html-страницы   
      document.title = `Привет ${secondOpenCard}`;  
      console.log("useEffect " + secondOpenCard);
    },
  [secondOpenCard]);
  /* 
  let countClickCard = 0;
  let firstOpenCard;
  let secondOpenCard;
  */

>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
 let coupleValue = [];
 let coupleRefCard = [];
 let coupleAtt = [];
 let newGage = false;
<<<<<<< HEAD

=======
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
  const heandelClickOnOpenCard = (numerOnCard,countClick,selectorCard,selectorCardClose) =>{ // прокидываю valueCountClick через аргумент при вызове функции т.к из функции он не получает
    if(countClick == 1)
    {
      despatch(firstNumberCard(numerOnCard))
      setFirstOpenCard(numerOnCard)
      coupleValue.push(numerOnCard)
      coupleRefCard.push(selectorCard,selectorCardClose)
      console.log(coupleRefCard)
<<<<<<< HEAD
    }

=======

      /* 
      setCountClickCard("1")
      console.log(numerOnCard + " numerOnCard при 1 клике");
      setFirstOpenCard(numerOnCard)
      setTimeout(() => {
        console.log(firstOpenCard + " firstOpenCard d setTimeout");
      }, 2000);
      */
    }
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
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
<<<<<<< HEAD
    //despatch(clickPlayButton())
=======
    despatch(clickPlayButton())
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
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
<<<<<<< HEAD
=======
      console.log(arrNumberForMod);
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
      setGameMod(arrNumberForMod);
      setArrCard(listAllCard(arrNumberForMod))
    }
    else{
      arrNumberForMod = shuffle(hardMod)
<<<<<<< HEAD
=======
      console.log(arrNumberForMod);
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
      setGameMod(arrNumberForMod);
      setArrCard(listAllCard(arrNumberForMod))
    }
  }
  const listAllCard = (arrNumberForMod) => {
    let newArr = arrNumberForMod.map((num,index) =>
<<<<<<< HEAD
    <Card 
      key={index.toString()} 
      numerOnCard={num} 
      index={index} 
      heandelClickOnOpenCard={heandelClickOnOpenCard} 
      openCard={openCard}>
    </Card>
=======
    <Card key={index.toString()} numerOnCard={num} index={index} heandelClickOnOpenCard={heandelClickOnOpenCard} openCard={openCard}></Card>
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
    );
    return newArr;
  }

  const shuffle = (array) => {
    let m = array.length, t, i;
<<<<<<< HEAD
    while (m) {
      i = Math.floor(Math.random() * m--);
=======
  
    // Пока есть элементы для перемешивания
    while (m) {
  
      // Взять оставшийся элемент
      i = Math.floor(Math.random() * m--);
  
      // И поменять его местами с текущим элементом
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
<<<<<<< HEAD

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
        
=======
  const handleClickCheacked = (newValue) => {
    //setCheackedSwitch(newValue)
    
  }

  const addCardOnMap = () => {
    let allCards
  }
  return (
    <div className="mainDiv">  
        <Header/>
          {winGame &&
          <Menu handleClickPlay={handleClickPlayAgain} handleClickCheacked={handleClickCheacked} checked={cheackedSwitch} text={"You WIN !!!!"} textOnButton={"Play Again"} />
          }
        
          {!valuePlayButton && <Menu handleClickPlay={handleClickPlay} handleClickCheacked={handleClickCheacked} checked={cheackedSwitch} text={"Welcome to the game Card on React!"}textOnButton={"Play"}/>
          }
          {(valuePlayButton && !winGame) &&         
          <div className="cardMapDesk">{arrCard}</div>
          }
>>>>>>> 175140a9e9be995ed4c8ff7394cb69bb12949e24
    </div>
  );
}

export default App;
