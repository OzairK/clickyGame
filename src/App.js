import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends: friends,
    points: 0,
    topScore: 0,
    guess: "Make a Guess"
  }

  // an image has been selected, shuffle images, update points and top score 
  selectChar = (id, selectedAlready, index) => {

    const newFriends = this.state.friends
    let newPoints = this.state.points
    let topScoreNew = this.state.topScore;

    // if not selected before, add + 1 to point, mark as selected
    if (!selectedAlready) {
      newPoints++
      newFriends[index].selectedAlready = true;
      this.setState({ guess: "you guessed correctly" })
    }
    // selected befor, thus games is over. check for top score, mark all chars
    // as not selected and point total is reset.
    else {
      if (newPoints > this.state.topScore) {
        topScoreNew= newPoints;
      }
      this.setState({ topScore: topScoreNew, guess: "you guessed wrong" })
      newFriends.map((friend => friend.selectedAlready = false))            //setting all chars to not selected
      newPoints = 0;
    }

    // randomizing order of characters
    for (let i = newFriends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newFriends[i], newFriends[j]] = [newFriends[j], newFriends[i]]; 
      newFriends[i].index = i;                                               // keeping track of new position in array
    }
    newFriends[0].index = 0;
    this.setState({ friends: newFriends, points: newPoints });                // setting state for new order of array and points
  }


  render() {
    return (
      <Wrapper>
        <Title title="Clicky" score={this.state.points} topscore={this.state.topScore} guess={this.state.guess} />
        <div className="card header" > <div className="cardBody"> Click on an image to earn points, but don't click on any more than once!</div></div>
        {this.state.friends.map((friend) => (

          <FriendCard
            selectChar={this.selectChar}
            id={friend.id}
            key={friend.id}
            index={friend.index}
            selectedAlready={friend.selectedAlready}
            image={friend.image}
          />))}
      </Wrapper>
    )
  }
}

export default App;
