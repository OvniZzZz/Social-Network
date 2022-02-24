import elon from '../../img/elon.jpg'
import Posts from '../posts/Posts'
import Profile from '../profile/Profile'
import Messages from '../messages/Messages'
import {Route} from 'react-router-dom'


import './Main.css'
function Main(props){
    return(
        <div className='main'>
            {/* <Profile name={props.name} src={elon}/> */}
            {/* <Posts/> */}
            <Route exact path ='/posts' component={Posts}/>
            <Route exact path ='/profile' component={Profile}/>
            <Route exact path='/messages' component={Messages}/>
        </div>
    )
}

export default Main;