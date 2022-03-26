import ClickCounter from "./components/counters/ClickCounter";
import Greeting from "./components/Greeting";
import GreetingWithCustomHooks from "./components/GreetingWithCustomHooks";
import CounterRenderProps from "./components/HOC/CounterRenderProps";
import PostList from "./components/PostList";
import Parent from "./components/react-hooks-flow/parent";
import UserList from "./components/UserList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* !--HOC with react hooks functional components */}
      {/* <UserList /> */}
      {/* <PostList /> */}

      {/* React Hook State lazy initialization */}
      {/* <Greeting initialState="" /> */}

      {/* React Custom Hook  */}
      {/* <GreetingWithCustomHooks /> */}

      {/* React Hooks Flow */}
      <Parent />
    </div>
  );
}
