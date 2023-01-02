import React from "react";

function Card(props) {
  return (
    <div className={props.cardClassName}>
      {props.cardTitleText !== undefined && (
        <h3 className={props.cardTitleClassName}>{props.cardTitleText}</h3>
      )}
      {props.titleImage !== undefined && (
        <img
          className={props.imageClass}
          src={props.titleImage}
          alt={props.imageAlt}
        />
      )}
      {props.pText !== undefined && (
        <p className={props.pClass}>{props.pText}</p>
      )}
      {props.list !== undefined && props.list}
    </div>
  );
}

export default Card;
