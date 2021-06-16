import React from "react";

// 変数名はファイルと同じにする！
export const CompleteTasks = (props) => {
  const { tasks, onClickBack } = props;
  return (
    <div>
      <h2 className="section-title">Completed Tasks</h2>
      <ul id="complete-list">
        {tasks.map((task, index) => {
          return (
            <li key={task} className="list-item">
              <p className="list-item-text">{task}</p>
              <button
                className="back-btn btn"
                onClick={() => onClickBack(index)}
              >
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
