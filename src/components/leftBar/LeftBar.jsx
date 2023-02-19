import "./leftBar.scss"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
// import Watch from "../../assets/1.png";
// import Memories from "../../assets/1.png";
// import Events from "../../assets/1.png";
// import Gaming from "../../assets/1.png";
// import Gallery from "../../assets/1.png";
// import Videos from "../../assets/1.png";
// import Messages from "../../assets/1.png";
// import Tutorials from "../../assets/1.png";
// import Course from "../../assets/1.png";
// import Fund from "../../assets/1.png";


const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/8872492/pexels-photo-8872492.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profileImage"/>            
            <span>Adamu Bello</span>
          </div>
          <div className="item">
            <img src={Friends} alt="imageIcon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="imageIcon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="imageIcon" />
            <span>Market</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
        </div>
      </div>
    </div>
  )
}

export default LeftBar;
