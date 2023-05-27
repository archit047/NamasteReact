import React, { Component } from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        // create State
        this.state = {
            userInfo:{
                name: "Dummy Name",
                bio: "Dummy Location",
            },
        };

        console.log("Child - Constructor" + this.props.name);
    }

    async componentDidMount(){
        // Best place to make an Api call
        this.timer = setInterval(()=>{
            console.log("NAMASTE REACT OP");
        },1000);

    const data = await fetch("https://api.github.com/users/archit047");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    });
       console.log("Child - componentDidMount" + this.props.name);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count!==prevState.count)
        {

        }
        if(this.state.count2!==prevState.count)
        {

        }
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

  render() {
    const {count} = this.state;
    console.log("Child - render" + this.props.name);
    return( 
    <div>
    <h1>Profile Class Component</h1>
    <img src={this.state.userInfo.avatar_url}/>
    <h2>name: {this.state.userInfo.name}</h2>
    <h2>bio: {this.state.userInfo.bio}</h2>
    </div>
    );
  }
}

/**
 * Child - Constructorfirst child
 *  Child - renderfirst child
 *  child component did mount
 * 
 * API Call
 * Set State
 * 
 * <UPDATE CYCLES>
 *  render
 */


export default Profile;