import {NavLink} from 'react-router-dom'
import './Sidebar.css'
function Sidebar(){
    return(
        <div className='sidebar'>
        <NavLink to ='/profile'>Profile</NavLink>
        <NavLink to ='/messages'>Messages</NavLink>
        <NavLink to ='/users'>Users</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        </div>
    )
}

export default Sidebar;