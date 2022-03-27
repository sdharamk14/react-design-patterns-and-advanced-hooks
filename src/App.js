import CounterContext from "./components/context-api/CounterContext";
import CounterContextProvider from "./components/context-api/CounterContextProvider";
import CounterDisplayWithContext from "./components/context-api/CounterDisplayWithContext";
import CounterWithContext from "./components/context-api/CounterWithContext";
import ClickCounter from "./components/counters/ClickCounter";
import Greeting from "./components/Greeting";
import GreetingWithCustomHooks from "./components/GreetingWithCustomHooks";
import CounterRenderProps from "./components/HOC/CounterRenderProps";
import PostList from "./components/PostList";
import Parent from "./components/react-hooks-flow/parent";
import UserList from "./components/UserList";
import "./styles.css";
import React from "react";
import CounterWithComposition from "./components/composition-resolving-props-drilling/CounterWithComposition";
import CounterDisplayWithComposition from "./components/composition-resolving-props-drilling/CounterDisplayWithComposition";
import CompoundComponent from "./components/design-patterns/compound-components/CompoundComponent";
import CompoundComponentWithNestedChildren from "./components/design-patterns/compound-components/CompoundComponentWithNestedChildren";

export default function App() {
  const [count, setCount] = React.useState(0);
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
      {/* <Parent /> */}

      {/* React Create context hooks */}
      {/* <CounterContextProvider>
        <CounterWithContext />
        <CounterDisplayWithContext />
      </CounterContextProvider> */}

      {/* React Composition for prop drilling */}
      {/* <CounterWithComposition setCount={setCount}>
        <CounterDisplayWithComposition count={count} />
      </CounterWithComposition> */}

      {/* Compound components design pattern */}
      {/* <CompoundComponent /> */}

      {/* Compound components with nested chidren design pattern */}
      <CompoundComponentWithNestedChildren />
    </div>
  );
}
