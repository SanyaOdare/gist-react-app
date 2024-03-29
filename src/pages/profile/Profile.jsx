import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="cover" alt="" />
        <img src="https://images.pexels.com/photos/15037775/pexels-photo-15037775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="profilePicture" alt="" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com" >
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" >
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" >
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" >
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" >
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Don Tayzee</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>github.com/dontayzee</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
