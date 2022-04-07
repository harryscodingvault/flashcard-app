import "./CustomButton.css";
import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdFlipCameraAndroid } from "react-icons/md";
import { ImEye } from "react-icons/im";
import { GrEdit } from "react-icons/gr";

const CustomButton = ({ title, type, size, purpose }) => {
  const icons = {
    add: <FaRegPlusSquare />,
    delete: <RiDeleteBin2Line />,
    view: <ImEye />,
    flip: <MdFlipCameraAndroid />,
    edit: <GrEdit />,
  };

  return (
    <button className={`container ${type} ${size}`}>
      {icons[purpose]}
      {title}
    </button>
  );
};

export default CustomButton;
