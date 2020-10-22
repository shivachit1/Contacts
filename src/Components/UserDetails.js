import React , {useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const UserDetails=(props)=> {

    const {id} = useParams();
    
    const [User,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
       
        
        axios.get(`https://jsonplaceholder.typicode.com/users/`+id)
        .then(res =>{
            setUser(res.data)
            setLoading(false);
        })
    
    
      },[id]);

    return(
        <div className="card-details-div">
            {loading ? 
           null
            :
            <div>
            <h3>- name: {User.name}</h3>
            <h3>- username: {User.username}</h3>
            <h3>- email: {User.email}</h3>
            <h3>- phone: {User.phone}</h3>
            <h3>- company: {User.company.name}</h3>
            <h3>- website: {User.website}</h3>
            <h3>- address</h3>
            <ul>
                <li><h3>street: {User.address.street}</h3></li>
                <li><h3>suite: {User.address.suite}</h3></li>
                <li><h3>city: {User.address.city}</h3></li>
                <li><h3>zipcode: {User.address.city}</h3></li>
            </ul>
            </div>
            }
           
        </div>
    )

}

export default UserDetails;