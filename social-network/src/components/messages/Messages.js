import './Messages.css'
import {NavLink} from 'react-router-dom';
import Message from './message/Message';
const messages = [{name: 'Иван Иванов', message: 'Привет, как дела?', id:'1'}, 
{name: 'Дональд Трамп', message: 'Го завтра на марс?', id:'1'},
{name:'Билл Гейтс', message: 'Жду мой новый чип', id:'3'}]
function Messages(prop){
    return(
        <div>
            {/* <Message name={messages[0].name} message ={messages[0].message} id='1'/>
            <Message name={messages[1].name} message={messages[1].message} id='2'/> 
            <Message name={messages[2].name} message={messages[2].message} id='3'/>  */}
            {messages.map((message) => <Message name={message.name} message={message.message} id={message.id}/>)}
            <div className='input'>
                <input placeholder='Введите сообщение '/>
            </div>
            <div className='button'>
                <button>SEND</button>
            </div>
        </div>
    )
}

export default Messages;    