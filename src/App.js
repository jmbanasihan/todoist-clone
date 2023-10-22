import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

//modules
import Task from "./modules/Task";

//components
import { Home, Login, Signup } from "./scene";
import { Nav, Sidebar } from "./components";

// styles
import "./App.scss";

function App() {
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const [isTaskModalShown, setIsTaskModalShown] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <Nav
          onClick={(bool) => {
            if (bool === "sidebar") {
              setIsSidebarShown(!isSidebarShown);
            }

            if (bool === "add task") {
              setIsTaskModalShown(!isTaskModalShown);
            }
          }}
        />
        <div className="main d-flex">
          <Sidebar className={isSidebarShown ? "show-sidebar" : "sidebar"} />

          {isTaskModalShown && (
            <div className="task-modal">
              <Task isTaskModalShown={isTaskModalShown} />
            </div>
          )}
          <Home />
        </div>
        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
    </Provider>
  );
}

export default App;
