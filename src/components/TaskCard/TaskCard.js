import {
  PencilSquare,
  Calendar2Event,
  ChatLeft,
  List,
  CheckCircle,
} from "react-bootstrap-icons";

//components
import Button from "../Button";

//styles
import "./taskCard.styles.scss";

const TaskCard = (props) => {
  const { name, desc, onClick } = props;

  return (
    <div className="task-card d-flex flex-column align-items-start">
      <div className="task-card__details d-flex justify-content-between">
        <div className="task-card__header d-flex align-items-center">
          <CheckCircle />
          <span className="task-name">{name}</span>
        </div>

        <div className="task-card__actions d-flex">
          <Button
            icon={<PencilSquare />}
            iconOnly
            onClick={() => onClick("edit")}
          />
          <Button icon={<Calendar2Event />} iconOnly />
          <Button icon={<ChatLeft />} iconOnly />
          <Button icon={<List />} iconOnly onClick={() => onClick("remove")} />
        </div>
      </div>

      <span className="task-desc">{desc}</span>
      <span className="task-due">Yesterday</span>
    </div>
  );
};

export default TaskCard;
