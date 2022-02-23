import React from "react"
import Footer from "./footer";
import Header from "./header";
import {Helmet} from "react-helmet";

export default function Layout({ children }) {
    return (
        <div>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
                        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
                        crossOrigin="anonymous" async></script>
            </Helmet>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
