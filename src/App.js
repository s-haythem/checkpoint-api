import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import UserList from './components/UserList';



function App() {

  const [users,setUsers] = useState([])

  useEffect(() => {
    
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => alert(err))
    
  }, [])
  
  return (
    <div className="App">
      <UserList users={users}/>
    </div>
  );
}

export default App;
