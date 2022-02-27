import React from "react";
import EcosystemVideo from "../videos/ecosystem.mp4";

const menu = require('../contents/urls.json');

class EcosystemSection extends React.Component {
    render() {
        return (
            <section className={'ecosystem-section'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-12 col-md-6'}>
                            <div className={'video-container'}>
                                <div className={'video-wrapper'}>
                                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                                        <source src={EcosystemVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <legend data-sal="fade"
                                    data-sal-delay="400"
                                    data-sal-duration="1000">ECOSYSTEM</legend>
                            <h3 data-sal="fade"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">47 apps, contracts, tools and 1400 DAO's built on Juno</h3>
                            <div className={'text-box'} data-sal="fade"
                                 data-sal-delay="600"
                                 data-sal-duration="1000">
                                Discover a wide variety of dapps, contracts and tools, built in the Junø ecosystem by developers and contributors from across the globe
                            </div>
                            <a href={menu.ecosystem} data-sal="fade"
                               data-sal-delay="800"
                               data-sal-duration="1000">
                                <div className={'link'}><i className={'icon-arrow-right'}></i> View Ecosystem</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default EcosystemSection;
