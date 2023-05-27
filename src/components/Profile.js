import { useEffect, useState } from "react";

const Profile=(props)=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
    //  API CALL
    const timer = setInterval(()=>{
    console.log("NAMASTE REACT OP")
    },1000);

    console.log("use Effect");

    return ()=>{
        clearInterval(timer);
        console.log("useEffect return");
    };
    },[]);
    console.log("render");
    return (
        <div>
            <h2>profile path</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <button 
            onClick={()=>{
                setCount(1);
                setCount2(1);
            }}>Count</button>
        </div>
    );
};

export default Profile;