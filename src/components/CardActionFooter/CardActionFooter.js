import React from "react";
import { ReactComponent as HeartStrokeIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/pen-solid.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash-alt.svg";
import "./CardActionFooter.css";

function CardActionFooter(props) {
  return (
    <div className='cardfooter'>
      <button className='cardfooter__button'>
        <HeartStrokeIcon />
      </button>
      <button className='cardfooter__button'>
        <EditIcon />
      </button>
      <button className='cardfooter__button'>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default CardActionFooter;
