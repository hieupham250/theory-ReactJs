import React from "react";

export default function UseRef() {
  const [count, setCount] = useState<number>(0);
  const useRef1 = useRef(0);
  const forcusInput = useRef<HTMLInputElement>(null);
  console.log("1111", useRef1);

  let index = 0;
  const handleClick = () => {
    index++;
    setCount(count + 1);
    useRef1.current = useRef1.current + 1;
  };
  console.log("giá trị index", useRef1.current);
  useEffect(() => {
    forcusInput.current?.focus();
  }, []);
  return (
    <div>
      UseRef
      {/* 
        nó là hook react cùng cấp
        cách dùng: inport vào dùng
        kết quả trả về của useRef là 1 đối tượng và trong có 1 thuộc tính mặt định là current

        nó có 2 cách dùng chính
        1. khi mỗi lần componet re-render thì nó không tạo ra 1 referenttype mà vẫn giữ nguyên giá trị refrentype ban đầu
        2. giúp mặt định focus vào input mình muốn
    */}
      <label htmlFor="">Nhập email</label>
      <input type="text" ref={forcusInput} />
      <label htmlFor="">Nhập mật khẩu</label>
      <input type="text" />
      <button>login</button>
      <p>count: {count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
