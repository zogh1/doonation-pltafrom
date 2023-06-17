import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import GalleryPage from "../components/gallery/gallery-page";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const Gallery = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Gallery Page || Azino || Charity React Next Template">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Gallery Page" crumbTitle="Gallery" />
          <GalleryPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Gallery;
