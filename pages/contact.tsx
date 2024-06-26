import React from 'react';
import Head from "next/head";
import Layout from "../components/Layout";
import ContactPage from "../components/ContactPage";

function Contact() {
    return (
        <>
            <Head>
                <title>Architect</title>
                <meta name="description" content="Created by Chirag Bhalotia"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <ContactPage/>
            </Layout>
        </>
    );
}

export default Contact;