import React from "react";

export const InputTasks = (props) => {
  const { taskText, onChange, onClick, disabled } = props;
  return (
    <div className="title-container">
      <h1 className="page-title">ToDo List</h1>
      <p className="title-container-text">
        To structure your life, <br />
        where life is work only
      </p>
      <div>
        <input
          disabled={disabled}
          className="input-area"
          id="add-text"
          placeholder="What's next?"
          value={taskText}
          onChange={onChange}
        />
        <button
          disabled={disabled}
          className="input-btn btn"
          id="add-btn"
          onClick={onClick}
        >
          完了
        </button>
      </div>
    </div>
  );
};
