import React from 'react';
import './UserItem.css';


function UserItem(props) {
    const {name, email, isGoldClient,salary,image} = props;
    console.log(props)
    return ( 
        <div className="user-item">
            <h3><strong>Nume: </strong>{ name }</h3>
            <p><strong>eMail: </strong>{ email }</p>
            { isGoldClient
                ? <h3 id="gold">Client GOLD</h3>
                : null
            }
            <p><strong>Salariu: </strong>{salary}</p>
            <img src={image} alt="img"></img>
        </div>
    );
}

export default UserItem;