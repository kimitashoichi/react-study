import React from "react";
// 1. 必要モジュールのインポート
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const StandardRouterApp: React.FC = () => {
  return (
    // 2. ルーティングを適用するコンポーネント全体をBrowserRouterでラップする
    <Router>
      <div>
        <nav>
          <ul>
            {/* 3. Linkでパスを指定する */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
      </div>

        {/* 4. SwitchでLinkで指定したパスに紐づいて表示されるコンポーネントをラップする */}
      <Switch>
        {/* exactをつけることでパスが完全一致した時にしか表示されなくなる、それ以外は pathName/any でも表示される */}
        <Route exact path="/"><Home /></Route>

        {/* 5. 指定されたパスに対するコンポーネントを記載する 
        パスは複数指定することもできる*/}
        <Route path={["/about", "/profile"]}><About /></Route>
        <Route path="/users"><Users /></Route>

        {/* 定義していないパスにアクセスされた時に表示されるコンポーネントを定義することができる、Routeコンポーネントにパスを指定しない書き方でOK */}
        <Route><Error /></Route>
      </Switch>
    </Router>
  )
}


// 同じファイルの中から出なくても別ファイルからインポートしてきたコンポーネントでもOK
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


export default StandardRouterApp;