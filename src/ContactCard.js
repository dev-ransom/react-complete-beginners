import React from 'react'
function ContactCard(props) {
    
    return (
        <div className='contact-card'>
            <img src={props.contact.imgUrl} alt="" />
            <h3>{props.contact.name} </h3>
            <h4>phone : {props.contact.phone} </h4>
            <p>email :{props.contact.email}</p>
        </div>
    )
}

export default ContactCard  