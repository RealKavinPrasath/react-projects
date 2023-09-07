import React from "react"


export default function Main(props) {
  return (
    <div className="Main">
      <h1>{props.track.track}</h1>
      <img src={`../${props.track.img}`} alt={`${props.track.driver}`} id="driver"/>
    </div>
  )
}