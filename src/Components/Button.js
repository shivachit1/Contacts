import React from 'react';
import { useHistory } from "react-router-dom";

const Button=(props)=> {
    const history = useHistory();
    
    const viewUserDetails = (user) => {

        history.push('/users/'+user.id);
        console.log('redirct to user route '+ user.name);

    }

    return(
        <div>
            <button onClick={()=> viewUserDetails(props.user)}>MORE DETAILS</button>
        </div>
    )

}

export default Button;