import React from "react";
import "./header.scss";
export default function header() {
  /**
   * quy tắc đặt tên co các class name đối với việc dùng scss
   *quy tắc BEM (Block-element-modifiter)
   */
  return (
    <div className="header">
      header
      <div className="logo">logo</div>
      <ul className="navigation">
        <li className="home">home</li>
        <li className="about">about</li>
        <li className="contact">contact</li>
      </ul>
    </div>
  );
}
