import React from "react";
import { Routes } from "../constants";
import { Layout } from "./appstyle";
import SearchBar from '../App/SearchBar';
import TodoList from '../App/TodoList';
import FooterBar from "./FooterBar";
import GlobalState from "../context/GlobalState";

interface Props {
  path: Routes;
}

const App: React.FC<Props> = ({ path }) => {
  return (
    <GlobalState>
      <Layout>
        <section className="appdiv">
          <SearchBar />
          <TodoList path={path} />
        </section>
        <FooterBar path={path} />
      </Layout>
    </GlobalState>
  );
};

export default App;
