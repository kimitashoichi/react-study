import React from "react";
// 1. 必要モジュールのインポート
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  RouteComponentProps
} from "react-router-dom";

const ParamsRouterApp: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/users/1">Users1</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        {/* <Route path="/users"><Users /></Route> */}
        <Route path="/users/:userId"><Users /></Route>
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

interface Params  {
  userId: string;
}

const Users: React.FC = () => {
  // このコンポーネントが表示される時にURLのパラメータを指定して取得することができる
  // 型はオブジェク型で指定する
  const {userId} = useParams<Params>();
  return (
    <>
      <h2>Users</h2>
      <h3>userID: {userId}</h3>
    </>
  )
}

const Error = () => {
  return <h2>Error</h2>;
}


export default ParamsRouterApp;