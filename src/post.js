import React from 'react'
import './post.css'

export default function post(props) {
    return (
        <li className='cont'>
            <img width="100%" src={props.image}></img>
            <p className='textunder'><a href={props.link}>{props.name}</a></p>
        </li>
    )
}
