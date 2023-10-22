import {
  List,
  HouseDoor,
  Plus,
  QuestionCircle,
  Bell,
} from "react-bootstrap-icons";

//components
import Button from "../Button";

//styles
import "./nav.styles.scss";

const Nav = (props) => {
  const { onClick } = props;

  return (
    <div className="nav d-flex justify-content-between align-items-center">
      <div className="actions d-flex align-items-center">
        <Button icon={<List />} iconOnly onClick={() => onClick("sidebar")} />
        <Button icon={<HouseDoor />} iconOnly onClick={() => onClick("home")} />
        <input placeholder="Search" />
      </div>
      <div className="actions d-flex align-items-center">
        <Button icon={<Plus />} iconOnly onClick={() => onClick("add task")} />
        <Button icon={<QuestionCircle />} iconOnly />
        <Button icon={<Bell />} iconOnly />
      </div>
    </div>
  );
};

export default Nav;
