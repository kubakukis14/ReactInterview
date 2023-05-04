import { AddNewUser } from "./components/addnewuser";
import Header from "./components/Header";
import USERLIST from "./components/UserList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header name={"User foo"} />
      <AddNewUser />
      <USERLIST />
    </div>
  );
}
