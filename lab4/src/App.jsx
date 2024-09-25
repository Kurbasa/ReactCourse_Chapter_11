import "./App.css";
import PageTitle from "./components/PageTitle";
import ToDoContainer from "./components/ToDoContainer";
import ToDoTable from "./components/ToDoTable";

function App() {
  return (
    <>
      <PageTitle title={"To Do App"} />
      <ToDoContainer />
    </>
  );
}

export default App;
