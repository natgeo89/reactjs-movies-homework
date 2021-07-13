import React from "react";
import styles from "./ActorCard.module.scss";
import { Link } from "react-router-dom";

interface ActorCardProps {
  img: string;
  id: number;
  actorName: string;
  character: string;
}

const ActorCard: React.FC<ActorCardProps> = ({ img, id, actorName, character }) => {
  return (
    <Link to={`/person/${id}`} className={styles.card_wrapper}>
      {/* <div className={styles.rating}>{rating}</div> */}
      <div className={styles.img_wrapper}>
        <img src={img} className={styles.image} alt={"actor"} />
      </div>
      {actorName && <div>{actorName}</div>}
      {character && <div>{character}</div>}
    </Link>
  );
};
export default ActorCard;
