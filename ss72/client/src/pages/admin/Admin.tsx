import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUser } from "../../store/reducers/userReducer";
import { User } from "../../interface";

export default function Admin() {
  const getData: any = useSelector((state) => state);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getUser());
  }, []);
  // console.log(getData);
  const addNewUser = () => {
    let newUser = {
      name: "thảo",
    };
    dispath(addUser(newUser));
  };
  return (
    <div>
      Admin
      {getData.user.user.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button onClick={addNewUser}>add user</button>
    </div>
  );
}
