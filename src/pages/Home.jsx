import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            Home Page
            <Link to='/about'>Go to About</Link>
        </div>
    );
}

export default Home;