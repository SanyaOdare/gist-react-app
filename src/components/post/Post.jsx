import "./post.scss";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavouriteOutlinedIcon from "@mui/icons-material/FavouriteOutlined";
// import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePicture} alt="" />
            <div className="details">
              <Link 
                to={`/profile/${post.userId}`} 
                style={{textDecoration: "none", color: "inherit"}}
              >
              <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>              
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content"></div>
        <div className="info"></div>
      </div>
    </div>
  )
}

export default Post;