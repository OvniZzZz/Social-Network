import Post from '../posts/Post';
const posts = [{message: 'hello world'},
{message: 'hey wazzup'},
{message: 'im using social-network'},
{message: 'ya ne znay angl'}]
function Posts(){
    return(
            <div className='posts'>
                <input placeholder='enter your post'/>
                <button>Add post</button>
                {/* <Post message='hello world'/>
                <Post message='hey wazzup'/>
                <Post message='im using social-network'/>
                <Post message='ya ne znay angl'/>    */}
                {posts.map((post) => <Post message = {post.message}/>)}
            </div>
    )
}

export default Posts;