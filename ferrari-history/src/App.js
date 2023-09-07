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
  
  function nextTrack() {
    setTrack(previousTrack => {
      const id = previousTrack.id + 1
      return (trackData[id])
    })
  }

  function prevTrack() {
    setTrack(previousTrack => {
      const id = previousTrack.id ? previousTrack.id - 1 : previousTrack.id 
      return (trackData[id])
    })
  }

  return (
    <div className="App">
      <Header />
      <Main track={track}/>
      <Footer next={nextTrack} prev={prevTrack} trackData={track}/>
    </div>
  );
}

export default App;
