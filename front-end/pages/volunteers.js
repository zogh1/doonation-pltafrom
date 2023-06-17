import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import TeamPage from "../components/team/team-page";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const Volunteers = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Our Volunteers || Azino || Charity React Next Template">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Our Volunteers" crumbTitle="Our Volunteers" />
          <TeamPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Volunteers;
