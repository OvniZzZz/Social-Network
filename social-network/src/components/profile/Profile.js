import elon from '../../img/elon.jpg'

function Profile(props){
    return(
        <div className='me'>
            <img src={elon}/>
            Elon Mask
        </div>
    )
}

export default Profile;