import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import UserList from './components/UserList';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  const [users,setUsers] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => alert(err))
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <UserList users={users}/>
    </div>
  );
}

export default App;
