// Job.js
import React, { useState } from "react";

interface Props {
  job: {
    name: string;
    status: boolean;
    id: number;
  };
  stt: number;
  onDelete: (id: number) => void;
  onEdit: (id: number, newName: string) => void;
}

export default function Job(props: Props) {
  const { job, stt, onDelete, onEdit } = props;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(job.name);

  const handleSave = () => {
    onEdit(job.id, name);
    setEditing(false);
  };

  return (
    <tr>
      <td>{stt + 1}</td>
      <td>
        {editing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          job.name
        )}
      </td>
      <td>{job.status ? "hoàn thành" : "chưa hoàn thành"}</td>
      <td>
        {editing ? (
          <button onClick={handleSave}>Lưu</button>
        ) : (
          <button onClick={() => setEditing(true)}>Sửa</button>
        )}
        <button onClick={() => onDelete(job.id)}>Xóa</button>
      </td>
    </tr>
  );
}
