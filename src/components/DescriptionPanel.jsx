import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass =
    (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass =
    (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  return (
    <div style={{  zIndex: '0' }}>
      <div className="description__panel" >
        <p className="description__header" onClick={showContent}>
          <span>{props.title}</span>
          <i className={chevronClass}></i>
        </p>
      </div>
      <p className={contentClass} style={{cursor: 'pointer' ,  zIndex: '1' }} onClick={showContent} >{props.content}</p>
    </div>
  );
}
