import React, { useState } from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import TaskAddinput from "./input/TaskAddinput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddinput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};
