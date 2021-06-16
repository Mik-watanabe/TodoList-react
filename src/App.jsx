import React, { useState } from "react";
import "./styles.css";
import { InputTasks } from "./components/InputTasks";
import { IncompleteTasks } from "./components/IncompleteTasks";
import { CompleteTasks } from "./components/CompleteTasks";

export const App = () => {
  const [taskText, setTaskText] = useState("");
  const [incompleteTasks, setIncompleteTasks] = useState([
    "things you gotta do",
    "things you really need to do"
  ]);
  const [completeTasks, setCompleteTasks] = useState(["things you have done"]);
  const onChangeTaskText = (event) => setTaskText(event.target.value);
  // 追加ボタンが押された時の処理
  const onClickAdd = () => {
    if (taskText === "") return alert("タスクを入力してください。");
    // 未完了タスクの新しい配列を作成する
    const newTasksList = [...incompleteTasks, taskText];
    setIncompleteTasks(newTasksList);
    setTaskText("");
  };
  // 削除ボタンが押された時の処理
  const onClickDelete = (index) => {
    const newTasksList = [...incompleteTasks];
    deleteElement(newTasksList, index);
    setIncompleteTasks(newTasksList);
  };
  // 完了ボタンが押された時の処理
  const onClickComplete = (index) => {
    const newIncompleteTasksList = [...incompleteTasks];
    deleteElement(newIncompleteTasksList, index);

    const newCompleteTasksList = [...completeTasks, incompleteTasks[index]];
    setIncompleteTasks(newIncompleteTasksList);
    setCompleteTasks(newCompleteTasksList);
  };
  // 戻すボタンが押された時の処理
  const onClickBack = (index) => {
    const newCompleteTasksList = [...completeTasks];
    deleteElement(newCompleteTasksList, index);

    const newIncompleteTasksList = [...incompleteTasks, completeTasks[index]];
    setIncompleteTasks(newIncompleteTasksList);
    setCompleteTasks(newCompleteTasksList);
  };
  // 削除処理
  const deleteElement = (list, index) => {
    list.splice(index, 1);
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <InputTasks
          taskText={taskText}
          onChange={onChangeTaskText}
          onClick={onClickAdd}
          disabled={incompleteTasks.length >= 6}
        />
        {incompleteTasks.length >= 6 && (
          <p
            style={{
              textAlign: "center",
              marginTop: 24,
              color: "coral",
              fontWeight: "bold"
            }}
          >
            A maximum of 6 active tasks, please
          </p>
        )}
        <IncompleteTasks
          tasks={incompleteTasks}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteTasks tasks={completeTasks} onClickBack={onClickBack} />
      </div>
    </div>
  );
};
