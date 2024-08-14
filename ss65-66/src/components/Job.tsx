import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Job() {
  const stateJob: any = useSelector((state) => {
    return state;
  });
  console.log("stateJob", stateJob);
  const dispatch = useDispatch();
  const addJob = () => {
    let newJob = {
      id: 2,
      name: "học redux",
      status: false,
    };
    dispatch({
      type: "ADD",
      payload: newJob,
    });
  };
  return (
    <div>
      Job
      <button onClick={addJob}>thêm</button>
      {stateJob.reducerJob.map((job: any) => {
        return <li key={job.id}>{job.name}</li>;
      })}
    </div>
  );
}
