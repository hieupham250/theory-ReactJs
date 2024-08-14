import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
}

export default function GetMethod() {
  const [students, setStudents] = useState<Student[]>([]);
  const [typeSubmit, setTypeSubmit] = useState<string>("add");
  const [inputValue, setInputValue] = useState<string>("");
  const [student, setStudent] = useState<Student>({
    id: Math.ceil(Math.random() * 10000000000000),
    name: "",
    dateOfBirth: "",
    email: "",
  });

  const loadData = () => {
    fetch("https://your-api-url.com/students") // Thay thế bằng URL API thực tế
      .then((response: Response) => response.json())
      .then((data: Student[]) => setStudents(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id: number) => {
    fetch(`https://your-api-url.com/students/${id}`, {
      // Thay thế bằng URL API thực tế
      method: "DELETE",
    })
      .then((response: Response) => {
        if (response.ok) {
          // load lại trang
          loadData();
          // đóng modal
        }
      })
      .catch((error) => console.log(error));
  };

  //hàm lấy giá trị trong form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // cập nhật lại state cho student
    setStudent({
      ...student,
      [name]: value,
    });
  };

  // reset giá trị form
  const resset = () => {
    setStudent({
      id: Math.ceil(Math.random() * 10000000000000),
      name: "",
      dateOfBirth: "",
      email: "",
    });
  };

  const handleSumit = (e: React.FormEvent) => {
    e.preventDefault();
    // 1. valite dữ liệu
    // 2. nếu valite ok thì gửi lên server
    // nếu typeSubmit là add sẽ thêm mới data
    if (typeSubmit === "add") {
      fetch(`https://your-api-url.com/students`, {
        // Thay thế bằng URL API thực tế
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(student),
      })
        .then((respone: Response) => {
          if (respone.ok) {
            // đóng form

            // load lại dữ liệu
            loadData();
            // reset form
            resset();
          }
        })
        .catch((error) => console.log(error));
    } else {
      // nếu typeSubmit là update sẽ tiến hành cập nhật dữ liệu
      fetch(`https://your-api-url.com/students${student.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(student),
      }).then((respone: Response) => {
        if (respone.ok) {
          // đóng form

          // reset form
          resset();
          // load lại dữ liệu
          loadData();
          // cập nhật lại cho form
          setTypeSubmit("add");
        }
      });
    }

    // 2.1
  };

  // hàm lấy thông tin chi tiết một bản ghi theo id
  const handleGetInfo = (id: number) => {
    // cập nhật lại typesubmit
    setTypeSubmit("update");
    // gọi API lấy thông tin
    fetch(`https://your-api-url.com/students/${id}`)
      .then((response: Response) => response.json())
      .then((data: Student) => setStudent(data))
      .catch((error) => console.log(error));
  };

  // hàm cập nhật dữ liệu

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />{" "}
      <div>
        <br />
        <table>
          <thead>
            <tr>
              <th>stt</th>
              <th>name</th>
              <th>email</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => handleGetInfo(student.id)}>Xóa</button>
                  <button onClick={() => handleDelete(student.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={handleSumit}>
          <h3>thêm mới</h3>
          <div>
            <label htmlFor="">Name</label>
            <input
              value={student.name}
              onChange={handleChange}
              name="name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">DàyOfBirth</label>
            <input
              value={student.dateOfBirth}
              onChange={handleChange}
              name="dateOfbirth"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              value={student.email}
              onChange={handleChange}
              name="email"
              type="text"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
