interface Props {
  name: string;
  students: string[];
}

export default function Functional(props: Props) {
  console.log("1111", props);
  // có thể dùng destructoring
  const { name } = props;
  const { students } = props;
  return (
    <div>
      Functional
      <p>xin chào {name}</p>
      {/* hiển thi danh sách sinh viên */}
      <ul>
        {students.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
