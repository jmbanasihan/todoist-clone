import React from "react";
import { Filter } from "react-bootstrap-icons";

//modules
import Task from "../../modules/Task";

//components
import Button from "../../components/Button";

//hooks
import useHome from "./home.hooks";

//styles
import "./home.styles.scss";

const Home = (props) => {
  const {} = useHome(props);

  return (
    <div className="home d-flex flex-column align-items-center">
      <div className="wrapper">
        <div className="wrapper-header d-flex justify-content-between align-items-center">
          <span className="wrapper-title">Today</span>
          <Button label="View" colorOption="muted" leftIcon={<Filter />} />
        </div>

        <Task isListShown isButtonShown />
      </div>
    </div>
  );
};

export default Home;
