import React, { useState } from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import ResetPasswordForm from "../../components/team/resetPasswordForm";
import BrandCarousel from "../../components/brand-carousel";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import { ToastContainer } from "react-toastify";
import { useRouter } from 'next/router';



const Reset = () => {

  const router = useRouter()
  const { token } = router.query;
  console.log(token)

  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  const handleResetPasswordSuccess = () => {
    setResetPasswordSuccess(true);
  };

  return (

    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Reset Password">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Reset Password" crumbTitle="Reset Password" />
          {resetPasswordSuccess ? (
            <div className="text-center mt-5">
              <h4>Password reset successful</h4>
              <p>
                Your password has been successfully reset. You can now{" "}
                <a href="/login">sign in</a> using your new password.
              </p>
            </div>
          ) : (
            <ResetPasswordForm onResetPasswordSuccess={handleResetPasswordSuccess} match={token} />
          )}
          <ToastContainer />

          <BrandCarousel extraClass="client-carousel__has-border-top" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );

};

export default Reset;
