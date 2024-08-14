// ListJob.js
import React from "react";
import Job from "./Job";

interface Props {
  jobs: Job[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newName: string) => void;
}

interface Job {
  name: string;
  id: number;
  status: boolean;
}

export default function ListJob(props: Props) {
  const { jobs, onDelete, onEdit } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((item, index) => (
            <Job
              key={item.id}
              job={item}
              stt={index}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
