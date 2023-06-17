import React, { useEffect } from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import LoginForm from "../components/team/loginForm";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import { ToastContainer } from "react-toastify";



const Login = () => {
  

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Sign In">
          <HeaderOne />
          <StickyHeader />
          <PageHeader
            title="Sign In"
            crumbTitle="Sign In"
          />
          <LoginForm />
          <ToastContainer />

          <BrandCarousel extraClass="client-carousel__has-border-top" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Login;