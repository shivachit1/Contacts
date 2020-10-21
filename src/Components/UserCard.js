import React from 'react';
import { useHistory } from "react-router-dom";
import Button from './Button';
const UserCard=(props)=> {
   

    return(
        <div className="card-div">
            <div className="name-header">{props.user.name.slice(0,1).toUpperCase()}</div>
            <h3>{props.user.name}</h3>
            <p>@{props.user.username}</p>
            <a className="link" href={props.user.website}>{props.user.website}</a>
            <Button user={props.user}></Button>
        </div>
    )

}

export default UserCard;
