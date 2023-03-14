import "./stories.scss"

const Stories = () => {

  // Dummy Data
const stories = [
  {
    id: 1,
    name: "Ahmadu Bashir",
    img: "https://images.pexels.com/photos/12698455/pexels-photo-12698455.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Ahmadu Bashir",
    img: "https://images.pexels.com/photos/12698455/pexels-photo-12698455.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Ahmadu Bashir",
    img: "https://images.pexels.com/photos/12698455/pexels-photo-12698455.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Ahmadu Bashir",
    img: "https://images.pexels.com/photos/12698455/pexels-photo-12698455.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]
  return (
    <div className="stories">
      {stories.map(story=>(
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
