import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EditprofileForm from "../components/editprofilerForm";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import { useEffect, useState } from "react";
import Router from 'next/router'


const editprofile = () => {
 // const router = useRouter();


 const [token, setToken] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setToken(token);
    console.log(token);
    if(!token){
      Router.push('/login')
    }
  }, []);

  
    return (
        <MenuContextProvider>
          <SearchContextProvider>
            <Layout pageTitle="Edit Profile || Inter Donation ">
              <HeaderOne />
              <StickyHeader />
              <PageHeader
                title="Edit Profile"
                crumbTitle="Edit"
              />
              <EditprofileForm/>
              <Footer />
            </Layout>
          </SearchContextProvider>
        </MenuContextProvider>
      );




}

export default editprofile;
