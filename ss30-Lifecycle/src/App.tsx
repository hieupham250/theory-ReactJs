import React, { Component } from "react";
import Child from "./components/Child";

interface Props {}
interface State {
  name: string;
  age: number;
  count: number;
  isActive: boolean;
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "mỹ tâm",
      age: 20,
      count: 0,
      isActive: true,
    };
  }
  // phương thức thay đổi state
  // khi muốn thay đổi state đối với class component thì dùng this.State
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount(): void {
    console.log("componentDidMount được gọi");
    /*
      chạy sau khi component render lần đầu tiên 
      các thành phần của component được gán vào DOM
      có thể thực hiện các tương tác với DOM
      nơi lí tưởng để callAPI lấy data render ra component

    */
  }
  componentWillMount(): void {
    console.log("componentWillMount được gọi");
    /*chạy trước render cho nên ở component có thể tính toán lại state hoặc props nhưng nên lưu ý
    thời gian chuyển sang render nhanh*/
  }
  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ): boolean {
    return true;
  }
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    console.log("phương thức componentDidUpdate được gọi");
    /*
      chạy sau khi re-render
      các phần tử của component nó được gán kết vào DOM cho nên có thể dùng tương tác với DOM
    */
  }
  componentWillUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ): void {
    console.log("phương thức componentWillUpdate được gọi");
    /*
      chạy trước re-render nên cũng có thể dùng tính toán lại state và props
    */
  }

  handleRemove = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    console.log("component bắt đầu re-render");
    // không được state ở đây vì component nó re-render liên tục => chạy vô hạn

    return (
      <div>
        App
        {this.state.name}
        {/* 
          tạo class component
          lifecycle (vòng đời của 1 component ==> chỉ áp dụng với class
          trải qua 4 giai đoạn
          1. giai đoạn khởi tạo (initial)
            - khởi tạo state, props

          2. giai đoạn mounting (gắn vào thêm vào)
            - cung cấp các phương thức mặt định (có sẵn rồi)
            - sau khi giai đoạn khởi tạo xong thì tiếp đến chạy vào phương thức componentWillMount() ==> render ==> componentDidMount
          
            3. giai đoạn update(thay đổi)
              - xảy ra khi nào khi state hoặc props thay đổi thì chạy vào giai đoạn update
              - cung cấp các phương thức
              1. shouldComponentUpdate
                => bắt buộc phải return true/false
                => nếu không khai báo hàm thì mặt định là true
              2. componentWillUpdate
              3. componentDidUpdate

          4. giai đoạn unmouting (gỡ bỏ xóa bỏ)

        )
       */}
        {this.state.isActive ? <Child></Child> : ""}
        <button onClick={this.handleRemove}>remove Child</button>
        <p>giá trị count {this.state.count}</p>
        <button onClick={this.handleClick}>count</button>
      </div>
    );
  }
}
