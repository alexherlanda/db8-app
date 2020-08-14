import React from "react";
import { Layout } from "antd";
import MainBar from "./components/molecular/MainBar";
import EventsFeed from "./pages/EventsFeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.less";

function App() {
  const { Header, Content } = Layout;

  return (
    <Router>
      <Layout>
        <Header style={{ padding: "0 15px" }}>
          <MainBar />
        </Header>
        <Layout>
          <Content style={{ margin: 20 }}>
            <Switch>
              <Route path="/events/post">Agregar a un evento</Route>
              <Route path="/">
                <EventsFeed />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
