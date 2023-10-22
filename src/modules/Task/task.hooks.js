import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//actions
import { createTask, updateTask, removeTask } from "../../store/actions";

const useTask = (props) => {
  const {
    isListShown = false,
    isButtonShown = false,
    isTaskModalShown = false,
  } = props;
  const [isNewTask, setIsNewTask] = useState(isTaskModalShown);
  const [editTaskId, setEditTaskId] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onRemove = (id) => {
    dispatch(removeTask(id));
  };

  const saveHandler = (action, id, task) => {
    if (action === "create") {
      dispatch(createTask(task));
      setIsNewTask(false);
      console.log("isNewTask", isNewTask);
    } else if (action === "edit") {
      setEditTaskId(0);
      dispatch(updateTask(id, task));
    }

    setTaskName("");
    setTaskDesc("");
  };

  useEffect(() => {
    if ((isNewTask && taskName) || (editTaskId && (taskName || taskDesc))) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [taskName, taskDesc]);

  return {
    editTaskId,
    setEditTaskId,
    isDisabled,
    tasks,
    isNewTask,
    setIsNewTask,
    saveHandler,
    setTaskName,
    setTaskDesc,
    taskName,
    taskDesc,
    onRemove,
    isListShown,
    isButtonShown,
  };
};

export default useTask;
