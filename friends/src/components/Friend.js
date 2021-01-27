import React from 'react'


export default function Friend(props) {
    return (
        <div className='friend-card'>
            <h1>Name: {props.friend.name}</h1>
            <h2>Age: {props.friend.age}</h2>
            <h2>Email: {props.friend.email}</h2>
        </div>
    )
}
