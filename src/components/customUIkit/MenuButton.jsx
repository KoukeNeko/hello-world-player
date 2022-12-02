import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuButton(props) {
  const { name, path, icon, active } = props.props;
  return (
    <li>
      <a
        className={
          (active ? "active" : "") + " flex justify-center items-center"
        }
        href={path}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
}

export default MenuButton;
