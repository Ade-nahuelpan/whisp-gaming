import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            About Page
            <br/>
            <Link to='/whisp-gaming'>Go to Home</Link>
        </div>
    );
}

export default About;