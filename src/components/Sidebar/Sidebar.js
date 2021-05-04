import React from "react";
import { NavLink } from "react-router-dom";
import useUsersFetch from "../../hooks/useUsersFetch";
import "./Sidebar.css";

function Sidebar() {
  const users = useUsersFetch();

<<<<<<< HEAD
    return (
        <div className="Sidebar">
            {users &&
                users.map((user) => (
                    <NavLink
                        to={String(user.userid)} //creates route to /:userid
                        activeStyle={{
                            color: "red",
                        }}
                    >
                        <h3 className="Sidebar__name">{user.name}</h3>
                    </NavLink>
                ))}
        </div>
    );
=======
  return (
    <div className="Sidebar">
      {users.map((user) => (
        <NavLink
          to={String(user.userid)} //creates route to /:userid
          activeStyle={{
            color: "red",
          }}
        >
          <h3 className="Sidebar__name">{user.name}</h3>
        </NavLink>
      ))}
    </div>
  );
>>>>>>> ed0ac607719074a553a1b7be28f4fcf95d13060c
}

export default Sidebar;
