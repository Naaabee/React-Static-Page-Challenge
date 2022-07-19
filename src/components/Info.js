import React from 'react'
import "./Info.css"

export default function Info() {
  return (
    <div className='info--section'>
      <img src={require("../images/rec.png")} alt="main" />
      <h1 className='info--name'>Laura Smith</h1>
      <p className='info--pos'>Frontend Developer</p>
      <p className='info--web'>laurasmith.website</p>
      <div className='info--buttons'>
        <button className='info--button1'><i className="fa-solid fa-envelope"></i>Email</button>
        <button className='info--button2'><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
      </div>
    </div>
  )
}
