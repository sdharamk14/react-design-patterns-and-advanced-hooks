import ClickCounter from "./components/counters/ClickCounter";
import Greeting from "./components/Greeting";
import CounterRenderProps from "./components/HOC/CounterRenderProps";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* !--HOC with react hooks functional components */}
      {/* <UserList /> */}
      {/* <PostList /> */}
      {/* React Hook State lazy initialization */}
      <Greeting initialState="" />
    </div>
  );
}
