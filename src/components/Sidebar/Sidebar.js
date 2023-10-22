import {
  Calendar3,
  CalendarDate,
  CircleFill,
  Funnel,
  Inbox,
} from "react-bootstrap-icons";
import classNames from "classnames";

//components
import MenuItem from "../MenuItem";

//styles
import "./sidebar.styles.scss";

const Sidebar = (props) => {
  const { className, id } = props;
  return (
    <div
      id={id}
      className={classNames("sidebar d-flex flex-column", className)}
    >
      <div className="d-flex flex-column">
        <MenuItem label="Inbox" leftIcon={<Inbox />} />
        <MenuItem label="Today" leftIcon={<CalendarDate />} />
        <MenuItem label="Upcoming" leftIcon={<Calendar3 />} />
        <MenuItem label="Filters & Labels" leftIcon={<Funnel />} />
      </div>

      <div className="sidebar__projects d-flex flex-column">
        <span>Projects</span>
        <div className="d-flex flex-column">
          <MenuItem label="Welcome" leftIcon={<CircleFill />} />
          <MenuItem label="Try Boards" leftIcon={<CircleFill />} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
