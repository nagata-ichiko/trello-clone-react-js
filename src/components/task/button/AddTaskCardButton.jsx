import React from "react";
import { v4 as uuid } from "uuid";
export const AddTaskCardButton = (taskCardsList, setTaskCardsList) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    // タスクカードを追加する。
    taskCardsList.setTaskCardsList([
      ...taskCardsList.taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
