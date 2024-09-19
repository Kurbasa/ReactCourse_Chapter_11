import "./App.css";
import PageTitle from "./components/PageTitle";
import ToDoContainer from "./components/ToDoContainer";
import ToDoContainer from "./components/ToDoTable.jsx";

function App() {
  return (
    <>
      <PageTitle title={"To Do App"} />
      <ToDoContainer />
    </>
  );
}
function App() {
  return (
    <>
      <PageTitle title={"To Do App"} />
      <ToDoTable />
    </>
  );
}

export default App;
