import React from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import TaskAddinput from "./input/TaskAddinput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddinput />
      <Tasks />
    </div>
  );
};
