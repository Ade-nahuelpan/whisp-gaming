import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            About Page
            <Link to='/home'>Go to Home</Link>
        </div>
    );
}

export default About;