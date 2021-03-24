import React, { useContext } from "react";
import { ReactComponent as HeartStrokeIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartFillIcon } from "../../assets/icons/heart-solid.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/pen-solid.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash-alt.svg";
import { UserStateDispatchContext } from "../../context/UserData.context";
import { UtilityStateDispatchContext } from "../../context/Utilities.context";
import "./CardActionFooter.css";

function CardActionFooter(props) {
  const { liked, id } = props;
  const UserStateDispatch = useContext(UserStateDispatchContext);
  const UtilityDispatch = useContext(UtilityStateDispatchContext);
  return (
    <div className='cardfooter'>
      <button
        className='cardfooter__button'
        onClick={() => UserStateDispatch({ type: "LIKE-USER", id: id })}
      >
        {liked ? <HeartFillIcon /> : <HeartStrokeIcon />}
      </button>
      <button
        className='cardfooter__button'
        onClick={() =>
          UtilityDispatch({ type: "SHOW-EDIT-DETAIL-MODAL", id: id })
        }
      >
        <EditIcon />
      </button>
      <button
        className='cardfooter__button'
        onClick={() =>
          UtilityDispatch({ type: "SHOW-DELETE-USER-MODAL", id: id })
        }
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default CardActionFooter;
