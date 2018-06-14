import React from "react";
import "./Title.css";

const Title = props => (<nav className="fixed-top navbar navbar-light bg-light title">


        <h1 className="justify-content-start">{props.title} </h1>
            <div className="guess justify-content-center">
                <p id="guessMsg">{props.guess}</p>
            </div>
        <div className="justify-content-end guess">
                <span  id="score">Score:  {props.score} | Highscore: {props.topscore} </span>
        </div>

</nav>
)


export default Title;
