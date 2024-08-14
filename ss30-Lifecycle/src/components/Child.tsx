import React, { Component } from "react";

export default class Child extends Component {
  componentWillUnmount(): void {
    console.log("phương thức componentWillUnmount được gọi");
    /*
        chạy cuối cùng khi phần tử xóa khỏi DOM
        nên thằng này thương dùng đẻ clear time-out... xóa khỏi bộ nhớ
    */
  }
  render() {
    return <div>Child</div>;
  }
}
