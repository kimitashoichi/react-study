import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


const UseHistoryApp: React.FC = () => {
  // historyオブジェクトの操作が可能
  // historyオブジェクトのメソッドを利用してルーティングを実現
  const history = useHistory();
  const handleClick = (path: string) => {
    history.push(path);
  }

  return (
    <>
      <div>
        <nav>
          <ul>
            <button onClick={() => handleClick("/")}>home</button>
            <button onClick={() => handleClick("/about")}>about</button>
            <button onClick={() => handleClick("/users")}>users</button>
          </ul>
        </nav>
      </div>
    </>
  )
}

const routerApp: React.FC = () => {
  return (
    <Router>
      <UseHistoryApp />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/users"><Users /></Route>
        <Route><Error /></Route>
      </Switch>
    </Router>
  )
}


const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

const Error = () => {
  return <h2>Error</h2>;
}


export default routerApp;