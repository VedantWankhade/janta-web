import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>JANTA</h1>
            <p>This is the home page.</p>
            {/* list of links */}
            <ul>
                <li>
                    <Link to='/myNotes'>My Notes</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;