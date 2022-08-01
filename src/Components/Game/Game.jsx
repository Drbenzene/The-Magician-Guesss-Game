import React, { useContext } from "react";
import { GlobalContext } from "../../Contex";
import styles from "./Game.module.css";
import Cartoon from "../Assets/theMagician.jpg";
import "./Game.css";
import "animate.css";

function Game() {
  const states = useContext(GlobalContext);
  const {
    changeHandler,
    guess,
    guessHandler,
    magician,
    count,
    played,
    allGuesses,
    hint,
  } = states;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4>
          Guess the secret number I'm thinking. If your guess is too high or too
          low, you'll get a hint.
        </h4>

        <img src={Cartoon} alt="Game Cartoon" width="500px" height="500px" />
      </div>

      <div className={styles.right}>
        <div>
          <p>Enter a number between 1 and 10.</p>
          {played && (
            <div>
              <p>
                You have <b>{5 - count}</b> Trials Left
              </p>
              <span className="animate__bounceInLeft" id={styles.hint}>
                {hint}
              </span>
            </div>
          )}
        </div>
        <input
          type="number"
          name="guess"
          value={guess}
          onChange={changeHandler}
          placeholder="Number Between (1 - 10)"
        />

        <button
          className="button-86"
          role="button"
          onClick={() => guessHandler()}
        >
          GUESS
        </button>
        {played === true && (
          <table>
            <thead>
              <tr>
                <th>High Guesses</th>
                <th>Low Guesses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>
                      {allGuesses.filter((theguess) => theguess > magician)}
                    </li>
                  </ul>
                </td>

                <td>
                  <ul>
                    <li>
                      {allGuesses.filter((theguess) => theguess < magician)}
                    </li>
                  </ul>
                </td>

              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Game;
