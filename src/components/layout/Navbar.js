import React from 'react';
import {Link} from "uikit-react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";

const Navbar = (props) =>{
    const {auth, profile} = props;
    //console.log(auth);
    const links =  auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return (
        <nav className={"nav-wrapper grey darken-3"}>
            <div className={"container"}>
                <Link className={"brand-logo"} to={"/dashboard"}>React Firebase App</Link>

                {links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {

    return {
        auth:state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect (mapStateToProps) (Navbar);