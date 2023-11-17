import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    // Check if tag is already selected
    if (taskData.tags.some((item) => item === tag)) {
      // remove tag from tags array
      setTaskData({
        ...taskData,
        tags: taskData.tags.filter((item) => item !== tag),
      });
    } else {
      // add tag to tags array
      setTaskData({ ...taskData, tags: [...taskData.tags, tag] });
    }
  };

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    setTaskData({ task: "", status: "todo", tags: [] });
  };

  return (
    <>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            className="task_input"
            placeholder="Enter your task"
            onChange={handleChange}
            value={taskData.task}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                tagName="JavaScript"
                selectTag={selectTag}
                selected={checkTag("JavaScript")}
              />
              <Tag
                tagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>
            <div>
              <select
                name="status"
                className="task_status"
                onChange={handleChange}
                value={taskData.status}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default TaskForm;
