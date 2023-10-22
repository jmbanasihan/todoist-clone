import classNames from "classnames";

//styles
import "./menuItem.styles.scss";

const MenuItem = (props) => {
  const { leftIcon, rightIcon, label, customClass, onClick } = props;

  return (
    <div
      className={classNames(
        "menu-item d-flex justify-content-between align-items-center",
        customClass
      )}
      onClick={onClick}
    >
      <div className="text d-flex align-items-center">
        {leftIcon}
        {label && <span>{label}</span>}
      </div>

      {rightIcon}
    </div>
  );
};

export default MenuItem;
