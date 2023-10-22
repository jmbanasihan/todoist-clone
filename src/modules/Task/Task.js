import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus } from "react-bootstrap-icons";

//components
import Button from "../../components/Button";
import TaskCardInput from "../../components/TaskCardInput";
import TaskCard from "../../components/TaskCard";

//hooks
import useTask from "./task.hooks";

//styles
import "./task.styles.scss";

const Task = (props) => {
  const {
    editTaskId,
    setEditTaskId,
    isDisabled,
    isNewTask,
    setIsNewTask,
    saveHandler,
    setTaskName,
    setTaskDesc,
    taskName,
    taskDesc,
    tasks,
    onRemove,
    isListShown,
    isButtonShown,
  } = useTask(props);

  return (
    <>
      {isListShown &&
        tasks &&
        tasks.map((task, index) => (
          <>
            {editTaskId === task.id ? (
              <TaskCardInput
                name={taskName}
                desc={taskDesc}
                key={index}
                button={{
                  label: "Save",
                  isDisabled: isDisabled,
                  onClick: (action) => {
                    if (action === "cancel") {
                      return setEditTaskId(0);
                    } else if (action === "save") {
                      return saveHandler("edit", task.id, {
                        id: task.id,
                        name: taskName || task.name,
                        desc: taskDesc,
                      });
                    }
                  },
                }}
                getInput={(type, value) => {
                  if (type === "name") {
                    setTaskName(value);
                  } else if (type === "desc") {
                    setTaskDesc(value);
                  }
                }}
              />
            ) : (
              <TaskCard
                key={index}
                name={task.name}
                desc={task.desc}
                onClick={(type, form) => {
                  if (type === "edit") {
                    setEditTaskId(task.id);
                    setTaskName(task.name);
                    setTaskDesc(task.desc);
                  }
                  if (type === "remove") return onRemove(task.id);
                }}
              />
            )}
          </>
        ))}

      {isButtonShown && !isNewTask && (
        <div className="add-task-btn d-flex">
          <Button
            label="Add task"
            colorOption="transparent"
            leftIcon={<Plus />}
            onClick={() => setIsNewTask(!isNewTask)}
          />
        </div>
      )}

      {isListShown && tasks.length === 0 && !isNewTask && (
        <div className="d-flex flex-column align-items-center">
          <img src="/no-task.png" alt="empty" />
          <span>Have a marvelous day off, Janiel!</span>
          <span>You have not created a task.</span>
        </div>
      )}

      {isNewTask && (
        <TaskCardInput
          button={{
            label: "Add task",
            isDisabled: isDisabled,
            onClick: (action) => {
              if (action === "cancel") {
                return setIsNewTask(false);
              } else if (action === "save") {
                const id = uuidv4();
                return saveHandler("create", null, {
                  id: id,
                  name: taskName,
                  desc: taskDesc,
                });
              }
            },
          }}
          getInput={(type, value) => {
            if (type === "name") {
              setTaskName(value);
            } else if (type === "desc") {
              setTaskDesc(value);
            }
          }}
        />
      )}
    </>
  );
};

export default Task;
