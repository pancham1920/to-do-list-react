import React from "react";
import type { Routes } from "../../constants";
import FilterLink from "./FilterLink";
import { Layout } from "./filterstyle";

interface Props {
  path: Routes;
}

const FooterBar: React.FC<Props> = ({ path }) => {
  return (
    <Layout>
      <footer className="footer">
        <FilterLink path={path} />
      </footer>
    </Layout>
  );
};

export default FooterBar;
