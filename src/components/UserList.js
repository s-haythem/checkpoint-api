
import User from "./User"


const UserList = ({users}) => {
    return (
        <div className='List'>
        <h1>Users List</h1>
        <div className='userList'>
            {users.map((el,i)=> <User user={el} key={i}/>)}
        </div>
        </div>
    )
}
export default UserList