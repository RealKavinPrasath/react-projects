import React from "react"

export default function Footer(props) {
  return (
    <div className="Footer">
      <p>{props.trackData.driver}</p>
      <p>{props.trackData.track}</p>
      <div className="navigation">
        <img src="../left-arrow.png" alt="" id="left" onClick={props.transition}/>
        <img src="../right-arrow.png" alt="" id="right" onClick={props.transition}/>
      </div>
    </div>
  )
}