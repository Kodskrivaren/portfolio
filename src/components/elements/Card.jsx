import React from "react";

function Card(props) {
  function createSlideShow(title) {
    const value = props.slideShow.length * 100 * -1 + 95;
    return `@keyframes ${title} {
    0%{left:0;}
    10%{left:0;}
    50%{left: ${value}%;}
    60%{left: ${value}%;}
    100%{left:0;}
    }`;
  }

  return (
    <div className={props.cardClassName}>
      {props.cardTitleText !== undefined && (
        <h2 className={props.cardTitleClassName}>{props.cardTitleText}</h2>
      )}
      {props.slideShow !== undefined && (
        <div className={props.slideShowClass}>
          <div
            className="images"
            style={{
              animation: `${props.slideShowClass + "slide"} ${
                props.slideShow.length * 9
              }s linear infinite`,
            }}>
            {props.slideShow.map((element) => {
              return element;
            })}
            <style>{createSlideShow(props.slideShowClass + "slide")}</style>
          </div>
        </div>
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
      {props.readMore !== undefined && props.readMore}
    </div>
  );
}

export default Card;
