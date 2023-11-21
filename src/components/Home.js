import React from "react"
import { name, city } from "../data/data.js"

function Home() {
  const customStyle = {
    color: "firebrick",
  };

  return (
    <div id="home">
      <h1 style={customStyle}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  )
}

export default Home