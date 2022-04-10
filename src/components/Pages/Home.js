import React from "react";
import axios from "axios";

import {Link} from "react-router-dom"
import ProfileViewPreview from "../common/ProfileViewPreview";

class Home extends React.Component {

    constructor(props) {
        super(props);
        //Chỉ định một state
        this.state = {
            listUser: [{
                "_id": 1,
                "firstName": "test",
                "about": "",
                "location": "",
                "occupation": "",
                "user": "",
                "lastName":"Cosa"
            }, {
                "_id": 2,
                "firstName": "test",
                "about": "",
                "location": "",
                "occupation": "",
                "user": "",
                "lastName": "Casa"
            }, {
                "_id": 3,
                "firstName": "test",
                "about": "",
                "location": "",
                "occupation": "",
                "user": "",
            }, {
                "_id": 4,
                "firstName": "test",
                "about": "",
                "location": "",
                "occupation": "",
                "user": "",
            }]
        };
    }

    getProfile = async () => {
        try {
            const result = await axios.get("http://localhost:5000/api/allprofile");
            console.log(result.data.data);
            this.setState({listUser: result.data.data});
            this.setState({user_id: result.data.data.user});
        } catch (e) {
            console.log("Error");
        }
    }


    items = []
    // for (let index = 0; index < 3; index ++) {
    //   items.push(<User />)
    // }
    componentDidMount() {
        this.getProfile();
    }

    render() {
        return (
            <div className="m-10 grid grid-cols-4 gap-4">

                {
                    this.state.listUser.map((user, index) => {
                        if (user.about.length > 15) {
                            user.about = user.about.substr(0, 15) + "...";
                        }
                        console.log(user.user);
                        return (
                            <ProfileViewPreview key={user._id} user={user}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default Home