import React from "react"

const user = {
    name: 'ransom',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: '90',
    radius: '50%'
}
function Joke() {
    return (
        <div className="circle">
            <h1>{user.name} </h1>
            <img src={user.imageUrl} alt="" style={{
                width: user.imageSize,
                height: user.imageSize,
                borderRadius: user.radius   
            }}/>
        </div>
    )
}

export default Joke


