import React from "react";
import avatar from "../NavBar/avt.jpg"
import "./User.css"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class User extends React.Component {
  render()
  {
    return (
      <div>
            <div className="frame-user">
                <div className="frame-user-img">
                  <img className="imgAvt" src={avatar} alt="Avatar"></img>
                </div>
                <div className="frame-user-name">
                  {this.props.name}
                </div>
                <div className="frame-user-desc">
                  Thích sư phụ
                </div>
            </div>
      </div>
  );
};
}
export default User
