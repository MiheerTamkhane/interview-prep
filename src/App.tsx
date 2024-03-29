import Question1 from "./components/cycleOne/Question1";
import Question2 from "./components/cycleOne/Question2";
import Counter from "./components/Counter";
import Box from "./components/context/Box";
import { ThemeProvider } from "./components/context/ThemeProvider";
import MutableRef from "./components/MutableRef";
import "./App.css";
import List from "./components/generic/List";

function App() {
  return (
    <>
      <h1>Cycle One.</h1>
      {/* <Question1 /> */}
      <hr />
      {/* <Question2 /> */}
      <hr />
      {/* <Counter /> */}
      <hr />
      {/* <ThemeProvider>
        <Box />
      </ThemeProvider> */}
      <hr />
      {/* <MutableRef /> */}
      <hr />
      <List
        items={[
          { id: 1, name: "Miheer" },
          { id: 2, name: "Yash" },
          { id: 3, name: "Sarang" },
        ]}
      />
      {/* <List items={[1, 3, 4]} />
      <List items={["a", "o", "i", "e", "u"]} /> */}
    </>
  );
}

export default App;
