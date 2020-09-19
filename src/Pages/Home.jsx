import React from "react";
import Home_service from "../Components/Home_service"

const Home = () => {
    return (
        <>
           <div className="container">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <Home_service />
                   </div>
               </div>
           </div>
        </>
    );
};

export default Home;