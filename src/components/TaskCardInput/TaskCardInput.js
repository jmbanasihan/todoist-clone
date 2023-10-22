//components
import Button from "../Button";

//styles
import "./taskCardInput.styles.scss";

const TaskCardInput = (props) => {
  const { name, desc, button, getInput } = props;

  return (
    <div className="task-card-input d-flex flex-column">
      <div className="task-card-input__input-group d-flex flex-column">
        <input
          value={name}
          placeholder="Task name"
          onChange={(e) => getInput("name", e.target.value)}
        />
        <input
          value={desc}
          placeholder="Description"
          onChange={(e) => getInput("desc", e.target.value)}
        />
      </div>
      <div className="task-card-input__footer d-flex justify-content-end">
        <Button
          label="Cancel"
          colorOption="muted"
          onClick={() => button.onClick("cancel")}
        />
        <Button
          colorOption="primary"
          label={button.label}
          onClick={() => button.onClick("save")}
          isDisabled={button.isDisabled}
        />
      </div>
    </div>
  );
};

export default TaskCardInput;
