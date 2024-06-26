import Head from "next/head";
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import React from "react";
import { aboutPara } from "../configs/about";

export default function About() {
  return (
    <>
      <Head>
        <title>Architect</title>
        <meta name="description" content="Created by Chirag Bhalotia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          style={{
            backgroundImage: `url("${"/images/about/about2.jpg"}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          id="header"
          className={"h-[40vh] lg:h-[50vh] flex justify-center items-center"}
        >
          <h1 className={"text-center text-6xl text-white font-bold"}>
            About Us
          </h1>
        </section>
        <AboutUs knowMore={false} />
        <section className={"lg:p-40 xl:p-50 p-10"}>
          <h2 className={"text-center text-4xl font-semibold"}>Our Story</h2>
          {aboutPara.map((para, index) => {
            return (
              <p key={index} className={"py-4 text-xl text-justify"}>
                {para}
              </p>
            );
          })}
          <h2 className={"text-center text-4xl font-semibold mt-5"}>Our Mission</h2>
          <p className={"py-4 text-xl text-justify"}>
            {
              "We pride ourselves on our ability to listen to our client's needs and preferences, interpret these needs, and then transform them into suitable solutions. Our attention to detail is key to making our projects places of “lived-in art”. We at Creative Interiors do not have a “signature style”. We deliberately allow our client’s tastes and desires to direct the course of our design and find that through this process our clients partake in a creative and thought-provoking experience that results in a unique, well-crafted, and beautiful end product."
            }
          </p>
          <h2 className={"text-center text-4xl font-semibold mt-5"}>OUR VISION</h2>
          <p className={"py-4 text-xl text-justify"}>
            {
              "To give a comprehensive design solution from a pin to the master plan of a city and everything in between, because we truly believe that design cannot exist in isolation."
            }
          </p>
        </section>
      </Layout>
    </>
  );
}
