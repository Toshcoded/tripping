import React from "react";
import axios from "axios";
import avatar from "../NavBar/avt.jpg"
import "./User.css"
import 'slick-carousel/slick/slick.css'
import { Link } from "react-router-dom"
import 'slick-carousel/slick/slick-theme.css'

class User extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      avatar: avatar,
      load: false
    };
  }
  // eslint-disable-next-line no-unreachable
  // getAvatar = async() => 
  // {
  //   try
  //   {
  //     console.log("a xi ớt trên")
  //     let userid = this.props.user_id;
  //     console.log("user id dưới")
  //     const avatar = await axios.get("http://localhost:5000/api/avatar/" + userid);
  //     console.log("AXIOS DƯỚI VIẾT HOA")
  //     console.log(avatar.data.newAvatar);
  //     this.setState({avatar:avatar.data.newAvatar});
  //     console.log("a xi ớt dưới")
  //   }
  //   catch(e)
  //   {
  //     console.log("Error");
  //   }
  // }
  getAvatar = async() =>
  {
    var userid = this.props.user_id;
    await axios.get("http://localhost:5000/api/avatar/" + userid)
    .then(response => {
      console.log("response")
      this.setState({avatar:response.data.newAvatar});
      this.setState({load: true});
    })
    .catch(function (error) {
      console.log("error");
    });
  }

  componentDidMount(){
    this.getAvatar();
  }

  render()
  {
      var avatarLink;
      if(this.state.avatar && this.state.load === true)
      {
        console.log("if ròi")
        avatarLink = "http://localhost:5000/images/" + this.state.avatar.avatar.substr(7, this.state.avatar.avatar.length);
      }
      //  avatar.data.newAvatar.avatar.substr(7, avatar.data.newAvatar.avatar.length
      console.log(avatarLink);
      return (
        <div>
              <div className="frame-user">
                  <div className="frame-user-img">
                    {
                      this.state.avatar && this.state.load === true
                      ? <img className="imgAvt" src={avatarLink} alt="Avatar"></img>
                      : <div></div>
                    }
                  </div>
                  <div className="frame-user-name">
                    Tên: {this.props.name}
                    <br/>
                    Location: {this.props.location}
                  </div>
                  <div className="frame-user-desc">
                    Occupation: {this.props.occupation}
                    <br/>
                    About: {this.props.about}
                    <Link to={"/about/"}>abcd</Link>;
                  </div>
              </div>
              
        </div>
    );
};
}
export default User
