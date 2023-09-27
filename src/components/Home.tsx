import * as React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import ColorButton from "./ColorButton";

function Home() {
  return (
    <div className="App">
      <h2>
        "useReduxState" gives you the ease of useState with the power of redux.
        No boiler plate, no prop drilling
      </h2>
      <h4>A simple todo list app to experiment with useReduxState hook</h4>
      <ColorButton color="red" />
      <ColorButton color="blue" />
      <ColorButton color="green" />
      <br />
      <br />
      <TodoInput />
      <TodoList />
      <p>
        This app modifies the redux toolkit starter app (existing boilerplate).
        "useReduxState" has a similar signature to useState but the first
        parameter is the key to the created redux state. "useReduxState" will
        only function inside a redux provider with a dynamicReducer. The hook
        has a dependency on react-redux, not redux toolkit.
      </p>
      <pre>const [isOpen, setIsOpen] = useReduxState("toastOpen", true)</pre>
      <a href="https://github.com/afrievalt/about-me">By Andy Frievalt</a>
    </div>
  );
}

export default Home;
