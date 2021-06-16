import React from "react";

export const IncompleteTasks = (props) => {
  const { tasks, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <h2 className="section-title">Uncompleted Tasks</h2>
      <ul id="incomplete-list">
        {tasks.map((task, index) => {
          return (
            <li key={task} className="list-item">
              <p className="list-item-text">{task}</p>
              <div className="btn-area">
                <button
                  className="complete-btn btn"
                  onClick={() => onClickComplete(index)}
                >
                  完了
                </button>
                <button
                  className="delete-btn btn"
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
