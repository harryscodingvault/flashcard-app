import "./CustomButton.css";
import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdFlipCameraAndroid, MdOutlineNextPlan } from "react-icons/md";
import { ImEye, ImCancelCircle } from "react-icons/im";
import { GrEdit } from "react-icons/gr";
import { BiBookBookmark } from "react-icons/bi";

const CustomButton = ({ title, kind, size, purpose }) => {
  const icons = {
    add: <FaRegPlusSquare />,
    delete: <RiDeleteBin2Line />,
    view: <ImEye />,
    study: <BiBookBookmark />,
    flip: <MdFlipCameraAndroid />,
    edit: <GrEdit />,
    next: <MdOutlineNextPlan />,
    cancel: <ImCancelCircle />,
  };

  return (
    <button className={`container ${kind} ${size}`}>
      {icons[purpose]}
      {title}
    </button>
  );
};

export default CustomButton;
