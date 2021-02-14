import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import queryString from "query-string";

interface Params {
  pathname: string;
  search: string;
  hash: string;
  state: { 
    test: string; 
  }
}

const to: Params = {
  pathname: '/users',
  search: '?class=A',
  hash: '#user-hash',
  state: { test: 'test-state' }
}

const UseLocationRouterApp: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* toオブジェクトをURLにセットしている */}
            <li><Link to={to}>Users</Link></li>
            {/* <li><Link to="/users/1">Users1</Link></li> */}
          </ul>
        </nav>
      </div>

      {/* <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/users"><Users /></Route>
        <Route><Error /></Route>
      </Switch> */}
    </Router>
  )
}

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Users: React.FC = () => {
  // このコンポーネントがレンダリングされた時のURL情報を取得
  // => useLocation
  const location = useLocation();

  // queryString.parseでuseLoactionで取ってきたオブジェクト
  const search = queryString.parse(location.search);
  return (
    <>
      {console.log(location.pathname)}
      <h2>Users</h2>
      { console.log(search) }
      {/* output : class: "A" */}
    </>
  )
}

const Error = () => {
  return <h2>Error</h2>;
}

export default UseLocationRouterApp;