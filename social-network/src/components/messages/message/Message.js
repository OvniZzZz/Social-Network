import {NavLink} from "react-router-dom";
function Message(props){
    return(
        <NavLink to = {`/messages/${props.id}`} className='messages'>
            <div className='name'>{props.name}</div>
            <p className='message'>{props.message}</p>
        </NavLink>
    )
}

export default Message;