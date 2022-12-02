import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGear, faHouse, faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

// components UI kit
import { MenuButton } from "./customUIkit";

function Menu() {

    const [menu, setMenu] = React.useState([
    {
      name: 'Home', 
      path: '/',
      icon: faHouse,
      active: true
    },{
      name: 'Favorites',
      path: '/favorites',
      icon: faHeart,
      active: false
    },{
      name: 'Bookmarks',
      path: '/bookmarks',
      icon: faBookmark,
      active: false
    }]);
    

  return (
    <ul className="menu p-3 pt-10 gap-3">
      {menu.map((item, index) => (
        <MenuButton props={item} key={index} />
      ))}

      {/* setting */}
      <li className="mt-auto">
        <a className="flex justify-center items-center">
            <FontAwesomeIcon icon={faGear} />
        </a>
      </li>
    </ul>
  );
}

export default Menu;
