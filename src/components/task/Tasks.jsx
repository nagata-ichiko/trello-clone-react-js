import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  const reorder = (taskList, sourceIndex, destinationIndex) => {
    const remove = taskList.splice(sourceIndex, 1);
    taskList.splice(destinationIndex, 0, remove[0]);
    setTaskList(taskList);
  };
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    index={index}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
