import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGear, faHouse, faMusic, faHeart, faBookmark, faBarsStaggered, faList } from "@fortawesome/free-solid-svg-icons";

// components UI kit
import { MenuButton } from "./customUIkit";

function Menu() {

    const [menu, setMenu] = React.useState([
    {
      name: 'Home', 
      path: '/',
      icon: faHouse,
      active: true,
      type: 'link'
    },{
      name: 'Music',
      path: '/music',
      icon: faMusic,
      active: false,
      type: 'link'
    },{
      name: 'Favorites',
      path: '/favorites',
      icon: faHeart,
      active: false,
      type: 'link'
    },{
      name: 'Bookmarks',
      path: '/bookmarks',
      icon: faBookmark,
      active: false,
      type: 'link'
    },{
      type: 'divider'
    },{
      name: 'Play Queue',
      path: '/queue',
      icon: faBarsStaggered,
      active: false,
      type: 'link'
    },{
      name: 'Playerlist',
      path: '/playerlist',
      icon: faList,
      active: false,
      type: 'link'
    }]);
    

  return (
    <ul className="menu p-3 pt-10 gap-3">
      {menu.map((item, index) => {
        switch (item.type) {
          case 'link':
            return <MenuButton key={index} props={item} />;
          case 'divider':
            return <div key={index} className="divider mt-0 mb-0" />;
          default:
            return <span>Error</span>;
        }
      })}

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
