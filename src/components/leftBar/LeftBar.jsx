import "./leftBar.scss"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Marketplace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Fund from "../../assets/11.png";
import Tutorials from "../../assets/12.png";
import Courses from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const LeftBar = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePicture} alt="profileImage"/>            
            <span>{currentUser.name}</span>
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
            <img src={Marketplace} alt="imageIcon" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="imageIcon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="imageIcon" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="imageIcon" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="imageIcon" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="imageIcon" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="imageIcon" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="imageIcon" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="imageIcon" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="imageIcon" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="imageIcon" />
            <span>Courses</span>
          </div>
        </div>
        <hr />
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
            <img src={Marketplace} alt="imageIcon" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="imageIcon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="imageIcon" />
            <span>Memories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
