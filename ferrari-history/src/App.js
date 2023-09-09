import './App.css';
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import data from "./data"
function App() {
  // eslint-disable-next-line no-unused-vars
  const [trackData, setTrackData] = React.useState(data)
  const [track, setTrack] = React.useState(trackData[0])
  
  function handleTransition(name) {
    setTrack(previousTrack => {
      const increment = previousTrack.id + 1
      const decrement = previousTrack.id - 1
      const lengthCheck = increment >= trackData.length
      const id = name === "right" ? (lengthCheck ? previousTrack.id : increment) : previousTrack.id ? decrement : previousTrack.id 
      return (trackData[id])
    })
  }

  return (
    <div className="App">
      <Header />
      <Main track={track}/>
      <Footer transition={(event) => handleTransition(event.target.id)} trackData={track}/>
    </div>
  );
}

export default App;
