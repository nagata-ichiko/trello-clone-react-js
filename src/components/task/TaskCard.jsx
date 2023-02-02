import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import TaskAddinput from "./input/TaskAddinput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = (taskCardsList, index, setTaskCardsList, taskCard) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable
      index={taskCardsList.index}
      draggableId={taskCardsList.taskCard.id}
    >
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="tascCardTitleAndTaskCardDeleteButtonArea">
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList.taskCardsList}
              setTaskCardsList={taskCardsList.setTaskCardsList}
              taskCard={taskCardsList.taskCard}
            />
          </div>
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
      )}
    </Draggable>
  );
};
