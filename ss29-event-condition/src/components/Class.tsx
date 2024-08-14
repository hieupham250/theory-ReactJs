import React, { Component } from "react";

export default class Class extends Component {
  // khai báo các phương thức
  handleClick = () => {
    console.log("sự kiện click khi click vào button");
  };
  // truyền để lấy tham số
  handleUpdate = (userID: any) => {
    console.log(userID);
  };
  render() {
    return (
      <div>
        Class
        <button onClick={this.handleClick}>Click</button>
        <p onClick={() => this.handleUpdate(11)}>mỹ tâm</p>
      </div>
    );
  }
}
