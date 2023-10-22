const createTask = (payload) => {
  return { type: "CREATE_TASK", payload: payload };
};

const updateTask = (id, payload) => {
  return { type: "UPDATE_TASK", id: id, payload: payload };
};

const removeTask = (id) => {
  return { type: "REMOVE_TASK", id: id };
};

export { createTask, updateTask, removeTask };
