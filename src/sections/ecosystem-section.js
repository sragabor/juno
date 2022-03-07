import React from "react";
import {Link} from "gatsby";

import EcosystemVideo from "../videos/ecosystem.webm";
import EcosystemPoster from "../videos/ecosystem.png";
import EcosystemVideoMov from "../videos/ecosystem.mp4";

const menu = require('../contents/urls.json');

const EcosystemSection = () => {
        return (
            <section className={'ecosystem-section'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-12 col-md-6'}>
                            <div className={'video-container'}>
                                <div className={'video-wrapper'}>
                                    <div id={'video-bg'}/>
                                    <video id={'ecosystem-video'} autoPlay={true} loop={true} playsInline={true} muted={true} poster={EcosystemPoster}>
                                        <source src={EcosystemVideoMov} type='video/mp4;codecs="hvc1"'/>
                                        <source src={EcosystemVideo} type="video/webm" />
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
                                 data-sal-duration="1000">50+ apps, contracts, tools and 2000+ DAO's built on Juno</h3>
                            <div className={'text-box'} data-sal="fade"
                                 data-sal-delay="600"
                                 data-sal-duration="1000">
                                Discover a wide variety of dapps, contracts and tools, built in the Junø ecosystem by developers and contributors from across the globe
                            </div>
                            <Link to={menu.ecosystem} data-sal="fade"
                               data-sal-delay="800"
                               data-sal-duration="1000">
                                <div className={'link'}><i className={'icon-arrow-right'} aria-label={'View Ecosystem'}></i> View Ecosystem</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default EcosystemSection;

