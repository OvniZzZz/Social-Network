import elon_mini from '../../img/elon_mini.jpg'
function Post(props){
    return(
        <div className='post'>
            <img src={elon_mini}></img>
            <span>Elon Mask</span>
            <p>{props.message}</p>
        </div>
    )
}

export default Post;