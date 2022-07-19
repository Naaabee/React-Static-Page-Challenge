import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer--section'>
        <ul className='footer--list'>
            <li><a href='www.twitter.com' target="blank"><img src={require('../images/twit.png')} alt="twitter"/></a></li>
            <li><a href='www.facebook.com' target="blank"><img src={require('../images/fb.png')} alt="facebook"/></a></li>
            <li><a href='www.instagram.com' target="blank"><img src={require('../images/ins.png')} alt="insta"/></a></li>
            <li><a href='https://github.com/' target="blank"><img src={require('../images/gh-l.png')} alt="github"/></a></li>
        </ul>
    </div>
  )
}
