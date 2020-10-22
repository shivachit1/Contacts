import React , {useState, useEffect }from 'react';
import axios from 'axios';
import UserCard from './UserCard';
const Home =()=> {

const [Users,setUsers] = useState(null);

useEffect(() => {
 
      fetchData();

},[]);

// asyn call for getting data from API
const fetchData  = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
        // saved response data to Users array
        setUsers(res.data);
    })
  }

  
    return(
        <div className="App">
        
            <div className="cards-container"> 
                {Users!=null ?
    
                    Users.map((user)=>(
                        <UserCard 
                        user={user} 
                        key ={user.id}/>  
                    
                    ))

                    :

                    null

                }
            </div>
        </div>
    )

}

export default Home;
