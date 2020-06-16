import React, { useState } from "react";
import styles from "./cardList.css";
import { Link } from "react-router-dom";

const CardListItem = (props) => {
  // console.log(props.data);

  return props.data.map((item, i) => {
    return (
      <div className={styles.cardContainer} key={item.id}>
        <Link to={`/gallery/${item.link}`} key={i}>
          <div
            className={styles.cardImg}
            style={{ background: `url(../images/${item.link}/${item.cover}` }}
          >
            <span className={styles.captionImg}>{item.name}</span>
          </div>
        </Link>
      </div>
    );
  });
};

export default CardListItem;
