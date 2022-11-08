import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../initFirebase";

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="App-link">
                    Home
                </Link>
                <Link to="/questionnary" className="App-link">
                    Survey
                </Link>
            </div>
            <div className="navbar-profile" style={{float: "right"}}>
                <button className="btn-profile">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                            fill="currentColor"/>
                        <path
                            d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                            fill="currentColor"/>
                    </svg>
                </button>
                <div className="dropdown-content">
                    {!auth.currentUser ? (
                        <Link to="/login" className="App-link">
                            Login
                        </Link>
                    ) : (
                        <>
                            <Link to="/Customization" className="App-link">
                                Custom Avatar
                            </Link>
                            <Link to="/UserProfilePage" className="App-link">
                                Profile
                            </Link>
                            <Link to="/logout" className="App-link">
                                Logout
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );

}