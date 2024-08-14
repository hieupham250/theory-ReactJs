import React, { useState } from "react";

export default function SelectOption() {
  const [select, setSlect] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSlect(e.target.value);
  };
  console.log(select);

  return (
    <div>
      SelectOption
      <select name="" id="" onChange={handleChange}>
        <option value="nam">Nam</option>
        <option value="nữ">Nữ</option>
        <option value="khác">Khác</option>
      </select>
    </div>
  );
}
