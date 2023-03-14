import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  // Dummy Data
const stories = [
  {
    id: 1,
    name: "Sandra Clair",
    img: "https://images.pexels.com/photos/1624111/pexels-photo-1624111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Azonto Stanley",
    img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Nike Bosch",
    img: "https://images.pexels.com/photos/12698455/pexels-photo-12698455.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Ahmadu Bashir",
    img: "https://images.pexels.com/photos/6087408/pexels-photo-6087408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePicture} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
