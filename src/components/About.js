import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "../components/Profile";
// import Profile from "../components/ProfileClass";
import Profile from "../components/Profile";
import { Component } from "react";
// const About = ()=>{
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>
//                 {" "}
//                 This is the Namaste react Live Course Chapter 07 - Finding the path.
//             </p>
//             <ProfileFunctionalComponent />
//             <Profile name={"Akshay"}/>
//         </div>
//     );
// };

class About extends Component {
  constructor(props) {
    super(props);
    
    // console.log("parent - constructor");
  }

  async componentDidMount() {
    // console.log("parent - componentDidMount");
  }

  render() {
    // console.log("parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          {" "}
          This is the Namaste react Live Course Chapter 07 - Finding the path.
        </p>
        <Profile name={"first child"} />
      </div>
    );
  }
}

export default About;

/*
parent - constructor
About.js:30 parent - render
ProfileClass.js:13 Child - Constructorfirst child
ProfileClass.js:22 Child - renderfirst child
ProfileClass.js:13 Child - Constructorsecond child
ProfileClass.js:22 Child - rendersecond child

DOM UPDATED FOR CHILDREN

ProfileClass.js:17 Child - componentDidMountfirst child
ProfileClass.js:17 Child - componentDidMountsecond child
About.js:26 parent - componentDidMount
*/