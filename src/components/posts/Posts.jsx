import Post from '../post/Post'
import './posts.scss'

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Sandra Clair",
      userId: 1,
      profilePicture: "https://images.pexels.com/photos/1624111/pexels-photo-1624111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img: "https://images.pexels.com/photos/3776843/pexels-photo-3776843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Azonto Stanley",
      userId: 2,
      profilePicture: "https://images.pexels.com/photos/6087408/pexels-photo-6087408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    // {
    //   id: 3,
    //   name: "Nike Bosch",
    //   img: "https://images.pexels.com/photos/12698455/pexels-photo-12698455.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },
    // {
    //   id: 4,
    //   name: "Ahmadu Bashir",
    //   img: "https://images.pexels.com/photos/6087408/pexels-photo-6087408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // }
  ]

  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts;
