import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AddDonationRequestForm from "../components/team/donationForm";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import { ToastContainer } from "react-toastify";

const AddDonationRequest = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Add Donation Request">
          <HeaderOne />
          <StickyHeader />
          <PageHeader
            title="Add Donation Request"
            crumbTitle="Add Donation Request"
          />
          <AddDonationRequestForm />
          <ToastContainer />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
}; 

export default AddDonationRequest;
