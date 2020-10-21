import React , {useState, useEffect }from 'react';
import axios from 'axios';
import UserCard from './UserCard';
const Home =()=> {

    const [Users,setUsers] = useState(null);
    

useEffect(() => {
    console.log('use effect is called.')
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
        
        setUsers(res.data);
        console.log(Users) ;
    })


},[]);

  
    return(
        <div className="App">
        
            <div className="cards-container"> 
                {Users!=null ?
        
            Users.map((user)=>(
            
             <UserCard user={user} key ={user.id}/>
                
            ))
            :
            <div></div>
            }
            </div>
        </div>
    )

}

export default Home;
