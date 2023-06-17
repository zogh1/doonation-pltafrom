import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import CauseContent from "../../components/causes/cause-content";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import { useRouter } from 'next/router';

const CauseDetails = () => {
    const router = useRouter()
    const { slug } = router.query;
    const id = slug[0];
    const show = slug[1];
    console.log(id)
    console.log(show)
    return (
        <MenuContextProvider>
            <SearchContextProvider>
                <Layout pageTitle="Cause Details || Azino || Charity React Next Template">
                    <HeaderOne />
                    <StickyHeader />
                    <PageHeader title="Cause Details" crumbTitle="Cause Details" />
                    <CauseContent id={id} show={show} />
                    <Footer />
                </Layout>
            </SearchContextProvider>
        </MenuContextProvider>
    );
};

export default CauseDetails;
