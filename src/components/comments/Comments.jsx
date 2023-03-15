import { useContext } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authContext";

const Comments = () => {

  const { currentUser } = useContext(AuthContext)
  // Temporary
  const comments = [
    {
      id: 1,
      desc: "Qui animi quae sed consequatur fuga ea rerum impedit et vero atque At officiis rerum a quia reiciendis et officia nostrum!",
      name: "Nike Bosch",
      userId: 1,
      profilePicture: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      desc: "Sed error asperiores id illo reiciendis vel iure tempora est porro quia non aliquid praesentium in accusamus repellendus.",
      name: "Ahmadu Bashir",
      userId: 2,
      profilePicture: "https://images.pexels.com/photos/6454660/pexels-photo-6454660.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ]
  
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map(comment => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))      
    }</div>
  )
}

export default Comments;
