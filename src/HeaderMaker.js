import React from 'react'

const HeaderMaker = ({user, changeUser}) => {
    return (<header>
        <img src = {user.avatar} alt = "alt best"></img>
        <h1>{user.fullName}</h1>
        <button onClick = {changeUser} src = 'https://static.thenounproject.com/png/5050-200.png'></button>
    </header>)
}

export default HeaderMaker