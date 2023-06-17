import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import VolunteerForm from "../components/team/volunteer-form";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import { useEffect } from "react";

const BecomeVolunteer = () => {
  
  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioa414d");
  }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="SIGN UP || Inter Donation ">
          <HeaderOne />
          <StickyHeader />
          <PageHeader
            title="Sign Up"
            crumbTitle="Become a User"
          />
          <VolunteerForm />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BecomeVolunteer;
