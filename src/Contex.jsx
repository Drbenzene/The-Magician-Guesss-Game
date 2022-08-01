import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import Champion from "./Components/Assets/champions.png";
import TryAgain from "./Components/Assets/laugning.png";

const GlobalContext = React.createContext();

const Provider = (props) => {
  const [guess, setGuess] = useState("");
  const [magician, setMagician] = useState(Math.floor(Math.random() * 10) + 1);
  const [count, setCount] = useState(0);
  const [played, setPlayed] = useState(false);
  const [allGuesses, setAllGuesses] = useState([]);
  const [hint, setHint] = useState("");

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const changeHandler = (e) => {
    setGuess(e.target.value);
  };

  const theAlert = (Title, Message, imgUrl, btnMessage) => {
    Swal.fire({
      title: Title,
      text: Message,
      imageUrl: imgUrl,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "High Number Image",
      confirmButtonColor: "black",
      confirmButtonText: btnMessage,
    })
    // .then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //   }
    // });
  };

  const guessHandler = () => {
    if (count >= 5) {
      theAlert(
        "Game Over",
        "Unfortuantely You couldn't Guess Right This Time",
        TryAgain, "Try Again Buddy"
      );
      setCount(0);
      setMagician(Math.floor(Math.random() * 10) + 1);
      setPlayed(false);

      setGuess("");
      setAllGuesses([]);
    } else {
      setCount((count) => count + 1);
      setPlayed(true);
      console.log("My Guess", guess);
      console.log("Magician Guessed", magician);

      if (guess > magician) {
        setHint("Your Guess was Too High, Please try a lower Number");
        setGuess("");
        setAllGuesses([...allGuesses, guess]);
        console.log(allGuesses);
        return;
      }

      if (guess < magician) {
        setHint("Your Guess was Too Low, Please try a higher Number");
        setGuess("");
        setAllGuesses([...allGuesses, guess]);
        console.log(allGuesses);
        return;
      } else {
        theAlert(
          "You are A Champion",
          `All Hail The Great Wizard Of The Century. My Magic Number was ${magician}`,
          Champion, "Play Again Champion"
        );
        setCount(0);
        setMagician(Math.floor(Math.random() * 10) + 1);
        setAllGuesses([]);
        setPlayed(false);
        return;
      }
    }
  };

  const state = {
    guess,
    setGuess,
    changeHandler,
    guessHandler,
    magician,
    setMagician,
    count,
    setCount,
    played,
    setPlayed,
    allGuesses,
    setAllGuesses,
    hint,
  };
  return (
    <GlobalContext.Provider value={state}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const Consumer = GlobalContext.Consumer;

export { GlobalContext, Provider, Consumer };
