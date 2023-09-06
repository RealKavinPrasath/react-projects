import React from "react"

export default function Card(props) {
    return (
      <div className="card--container">
          <div className="image--container">
            <img src={props.imageUrl} alt="course thumbnail"/>
          </div>
          <div className="card--info">
            <div className="card--info-upper">
              <div>
                <img src="./images/location.png" alt="location"/>
                <p>{(props.location).toUpperCase()}</p>
                <a href={props.courseUrl}>Go to Course</a>
              </div>
              <h2>{props.title}</h2>
            </div>
            <div className="card--info-lower">
              <h4>{props.instructor}</h4>
              <p>{props.description}</p>
            </div>
          </div>
      </div>
    )
}