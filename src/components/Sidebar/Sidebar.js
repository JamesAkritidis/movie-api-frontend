import React from "react";
import { NavLink } from "react-router-dom";
import useUsersFetch from "../../hooks/useUsersFetch";
import "./Sidebar.css";

function Sidebar() {
    const users = useUsersFetch();

    return (
        <div className="Sidebar">
            <div className="movie-logo"> {/* <h4>Watch List</h4> */}</div>
            <div className="sidebar__navlink">
                {users.map((user) => (
                    <div className="sidebar-user">
                        <NavLink
                            className="navlink"
                            to={String(user.userid)} //creates route to /:userid
                            activeStyle={{
                                color: "Green",
                            }}
                        >
                            <h3 className="Sidebar__name">{user.name}</h3>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
