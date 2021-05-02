import React from "react";
import { NavLink } from "react-router-dom";
import useUsersFetch from "../../hooks/useUsersFetch";
import "./Sidebar.css";

function Sidebar() {
    const users = useUsersFetch();

    return (
        <div className="Sidebar">
            {users.map((user) => (
                <NavLink
                    to={String(user.userid)}
                    activeStyle={{
                        color: "red",
                    }}
                >
                    <h3 className="Sidebar__name">{user.name}</h3>
                </NavLink>
            ))}
        </div>
    );
}

export default Sidebar;
