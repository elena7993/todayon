import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import {
  Tooltip,
  IconButton,
  EditIcon,
  TrashIcon,
  PlusIcon,
} from "evergreen-ui";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   // console.log(storedTasks);
  //   setTasks(storedTasks);
  // }, []);

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    // console.log("업데이트된 tasks:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    // 빈 입력 방지

    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = inputValue;
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newTask = { text: inputValue, completed: false };
      setTasks([...tasks, newTask]);
    }

    setInputValue("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setInputValue(tasks[index].text);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <Wrapper>
      <Header text="To-Do" />
      <div style={{ padding: "30px 0" }}>
        <div style={{ display: "flex", marginBottom: "16px" }}>
          <input
            type="text"
            placeholder={
              isEditing ? "할 일을 수정하세요" : "할 일을 입력하세요"
            }
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #6E7490",
              borderRadius: "10px",
            }}
          />
          <Tooltip
            content={
              isEditing ? "수정을 완료하세요!" : "새 할 일을 추가하세요!"
            }
          >
            <IconButton
              icon={isEditing ? EditIcon : PlusIcon}
              onClick={handleAddTask}
              appearance="primary"
              marginLeft={8}
              intent={isEditing ? "warning" : "none"}
              style={{
                backgroundColor: isEditing ? "#fff" : "#fff",
                color: "#000",
                border: "0.5px solid #6E7490",
                borderRadius: "10px",
              }}
            />
          </Tooltip>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                backgroundColor: task.completed ? "#f0f8ff" : "transparent",
                // padding: "8px",
                borderRadius: "4px",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                style={{ marginRight: "8px" }}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <Tooltip content="수정">
                <IconButton
                  icon={EditIcon}
                  onClick={() => handleEditTask(index)}
                  appearance="minimal"
                  marginRight={8}
                />
              </Tooltip>
              <Tooltip content="삭제">
                <IconButton
                  icon={TrashIcon}
                  onClick={() => handleDeleteTask(index)}
                  appearance="minimal"
                  intent="danger"
                  style={{ color: "#6E7490" }}
                />
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default ToDoList;
