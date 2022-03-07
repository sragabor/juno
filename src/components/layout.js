import React from "react"
import Footer from "./footer";
import Header from "./header";
import {Helmet} from "react-helmet";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Layout({ children }) {

    return (
        <div>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
                        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
                        crossOrigin="anonymous" async></script>
                <meta charSet="utf-8" />
                <title>Juno - Smart Contracts Zone</title>
                <meta content="Juno is an interoperable smart contract network and a zone part of the Cosmos Network. Highly scalable, robust, secure and easy to deploy!" name="description" data-react-helmet="true"/>
                <meta content="Smart Contracts Zone" property="og:site_name" data-react-helmet="true"/>

                <meta content="Smart Contracts Zone" property="og:site_name" data-react-helmet="true"/>
                <meta content="https://junonetwork.io/" property="og:url" data-react-helmet="true"/>
                <meta content="" property="og:image" data-react-helmet="true"/>

                <link rel="canonical" href="https://junonetwork.io/" />
                <meta name="theme-color" content="#000000"/>

            </Helmet>
            <Header/>
            <ParallaxProvider>
                <main>
                    {children}
                    <Footer/>
                </main>
            </ParallaxProvider>
        </div>
    )
}
