import classNames from "classnames";

// styles
import "./button.styles.scss";

const Button = (props) => {
  const {
    colorOption,
    iconOnly,
    icon,
    leftIcon,
    rightIcon,
    label,
    customClass,
    onClick,
    isDisabled,
  } = props;

  if (iconOnly)
    return (
      <div
        className={classNames(
          "icon d-flex justify-content-center align-items-center"
        )}
        onClick={onClick}
      >
        {icon}
      </div>
    );

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={classNames(
        "button d-flex justify-content-center align-items-center",
        `button--${colorOption}`,
        `button--disabled--${isDisabled}`,
        customClass
      )}
    >
      {leftIcon}
      {label && <span>{label}</span>}
      {rightIcon}
    </button>
  );
};

export default Button;
