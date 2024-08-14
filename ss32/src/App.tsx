// App.js
import React, { useState } from "react";
import ListJob from "./components/Jobs";

export default function App() {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs") || "[]")
  );
  const [name, setName] = useState<string>("");

  const handleClick = () => {
    if (name.trim() !== "") {
      const newJob = {
        name: name,
        id: Math.floor(Math.random() * 10000),
        status: false,
      };
      const updatedJobs = [...jobs, newJob];
      setJobs(updatedJobs);
      setName("");
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    } else {
      alert("Tên công việc không được để trống");
    }
  };

  const handleDeleteJob = (id: number) => {
    const updatedJobs = jobs.filter((job: any) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const handleEditJob = (id: number, newName: string) => {
    const updatedJobs = jobs.map((job: any) =>
      job.id === id ? { ...job, name: newName } : job
    );
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Thêm</button>
      <ListJob jobs={jobs} onDelete={handleDeleteJob} onEdit={handleEditJob} />
      <p>danh sách công việc đã hoàn thành</p>
    </div>
  );
}
